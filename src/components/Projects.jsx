import React from "react";

import { Carousel } from "./ui/carousel";
import { devProjects, analysisProjects } from "../constant/data";

// motion
import { motion } from "motion/react";
import * as variants from "../motion/animation";

const Projects = () => {
  return (
    <section className="section" id="projects">
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        {/* Title */}
        <motion.h2 variants={variants.fadeInUp} className="text-center mb-10">
          Projetos
        </motion.h2>

        {/* Container responsivo com flex wrap */}
        <motion.div
          variants={variants.fadeInUp}
          className="flex flex-col lg:flex-row gap-10"
        >
          {/* Desenvolvimento */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-xl font-semibold mb-6 text-center lg:text-center">
              Desenvolvimento
            </h3>
            <Carousel slides={devProjects} />
          </div>

          {/* Análise de Dados */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-xl font-semibold mb-6 text-center lg:text-center">
              Análise de Dados
            </h3>
            <Carousel slides={analysisProjects} />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
