import { Button } from "@/components/ui/button";
import Container from "@/components/layouts/Container";
import mackbook from "../../../src/assets/macbook-exposed 1.png";
import { easeInOut, motion } from "framer-motion";

const intro = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, staggerChildren: 0.1, delayChildren: 1 },
  },
};

const introChildren = {
  hidden: { opacity: 0, y: -200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { dutarion: 0.5, type: "spring", bounce: 0.5 },
  },
};

const laptop = {
  initial: { y: 0, rotate: 30, scale: 5 },
  animate: {
    y: 20,
    rotate: -30,
    scale: 1,
    transition: {
      duration: 1,
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: easeInOut,
      },
    },
  },
};

const HeroSection = () => {
  return (
    <div className="overflow-hidden">
      <Container className="h-screen pt-16 grid grid-cols-1 lg:grid-cols-2 place-content-center">
        <motion.div variants={intro} initial="hidden" animate="visible">
          <motion.h1
            className="text-5xl lg:text-8xl font-bold text-nowrap"
            variants={introChildren}
          >
            <span className="text-gray">Don't worry,</span>
            <br />
            <span>We'll fix it.</span>
          </motion.h1>
          <motion.p className="max-w-[50ch] mt-7 mb-3" variants={introChildren}>
            Welcome to <span className="font-semibold">iRepair</span>, your
            one-stop place for all kinds of{" "}
            <span className="font-semibold">Macbook repairs</span> and
            diagnostics.
          </motion.p>
          <motion.div variants={introChildren}>
            <Button>Book a service</Button>
          </motion.div>
        </motion.div>
        <motion.div
          className="mx-auto"
          variants={laptop}
          initial="initial"
          animate="animate"
        >
          <img className="object-contain" src={mackbook} alt="" />
        </motion.div>
      </Container>
    </div>
  );
};

export default HeroSection;
