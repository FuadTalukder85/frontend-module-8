import { useGetServices } from "@/api/admin/service/service.hook";
import Container from "@/components/layouts/Container";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { useState, FormEvent } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Trash2 } from "lucide-react";

const ServiceList = () => {
  const { data: services, isLoading, isError } = useGetServices();
  const [serviceName, setServiceName] = useState("");

  const {
    mutateAsync,
    isError: postError,
    isSuccess,
  } = useMutation({
    mutationFn: async (data) => {
      return await fetch("http://localhost:5000/api/v1/services", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
  });
  console.log({ postError, isSuccess });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const serviceData = {
      name: serviceName,
      description: "description",
      devices: ["Mackbook pro", "Mackbook Air"],
      price: 100,
    };

    console.log(serviceData);
    await mutateAsync(serviceData);
    console.log("done");
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Something went wrong</p>;
  }

  return (
    <Container className="mt-10 border p-0 rounded-2xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {services.map((service) => (
            <TableRow key={services.id}>
              <TableCell className="font-medium">{service.name}</TableCell>
              <TableCell>{service.description}</TableCell>
              <TableCell>{service.price}</TableCell>
              <TableCell className="text-right">
                <Button className="p-2" variant={"destructive"}>
                  <Trash2></Trash2>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total service</TableCell>
            <TableCell className="text-right">{services.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={(e) => setServiceName(e.target.value)} />
          <Button>Submit</Button>
        </form>
      </div>
    </Container>
  );
};

export default ServiceList;
