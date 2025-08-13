import React from "react";
import { aboutItems, analysisItems } from "../constant/data";

//motion
import { motion } from "motion/react";
import * as variants from "../motion/animation";

const About = () => {
  return (
    <section className="section bg-secondary-clr" id="about">
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        <motion.h2 variants={variants.fadeInUp}>Resumo de Carreira</motion.h2>
        <motion.p variants={variants.fadeInUp} className="mt-3 mb-9">
          Desenvolvedor Fullstack e Analista de Dados com 3 anos de experiência na Fábrica de Ideias, 
          onde desenvolvo e mantenho bots para web scraping usando Python (Scrapy) e crio aplicações web e APIs com PHP (Laravel e Flight) e JavaScript e TypeScript (Vue.js). 
          Com conhecimento em utilização de Docker e Git para organização de ambiente e versionamento. 
          Possuo conhecimento em análise e manipulação de grandes volumes de dados com MySQL e Python (Pandas e NumPy), focando na geração de relatórios que apoiam decisões estratégicas.
          Busco entregar soluções eficientes e escaláveis, alinhadas às necessidades reais dos projetos.
        </motion.p>

        {/* Container flex para os dois blocos */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Desenvolvimento */}
          <div className="flex-1">
            <motion.p
              variants={variants.fadeInUp}
              className="font-semibold text-white text-xl mb-3"
            >
              Desenvolvimento
            </motion.p>

            <ul className="space-y-2.5">
              {aboutItems.map((item) => (
                <motion.li variants={variants.fadeInUp} key={item.id}>
                  <p>
                    <span className="text-[#1EBEF2]">✔</span> {item.label}
                  </p>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Análise de Dados */}
          <div className="flex-1">
            <motion.p
              variants={variants.fadeInUp}
              className="font-semibold text-white text-xl mb-3"
            >
              Análise de Dados
            </motion.p>

            <ul className="space-y-2.5">
              {analysisItems.map((item) => (
                <motion.li variants={variants.fadeInUp} key={item.id}>
                  <p>
                    <span className="text-[#1EBEF2]">✔</span> {item.label}
                  </p>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
