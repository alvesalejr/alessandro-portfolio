import React, { useState } from "react";
import { heroIcons } from "../constant/data";
import Button from "./Button";
import Modal from "./Modal";
import { BackgroundGradient } from "./ui/BackgroundGradient";

//motion
import { motion } from "motion/react";
import * as variants from "../motion/animation";

const Hero = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const pdfPath = "/pdf/curriport.pdf";

  const whatsappLink =
    "https://wa.me/5561984250137?text=Olá,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar.";

  const openWhatsapp = () => {
    window.open(whatsappLink, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <section className="py-28 lg:pt-40" id="home">
        <motion.div
          variants={variants.staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="container flex flex-col items-center"
        >
          {/* Image */}
          <motion.div variants={variants.fadeIn}>
            <BackgroundGradient className="w-70 h-70 lg:w-80 lg:h-80 rounded-full bg-zinc-900">
              <figure className="rounded-full overflow-hidden">
                <img src="/images/avatar.png" width={452} height={452} />
              </figure>
            </BackgroundGradient>
          </motion.div>

          {/* Content */}
          <div className="text-center mt-8">
            <motion.h1
              variants={variants.fadeInUp}
              className="text-3xl lg:text-5xl mb-1.5"
            >
              Alessandro Júnior
            </motion.h1>
            <motion.h2 variants={variants.fadeInUp}>
              Developer and Data Analyst
            </motion.h2>
            <motion.p
              variants={variants.fadeInUp}
              className="max-w-[820px] mx-auto mt-4 mb-6"
            >
              Olá, seja bem-vindo(a).
              Este é o meu portfólio, criado para reunir em um só lugar minhas
              experiências, habilidades e projetos, facilitando que todos
              conheçam melhor meu trabalho e meu potencial como desenvolvedor e
              analista de dados.
            </motion.p>

            {/* Wrapper */}
            <motion.div
              variants={variants.fadeInUp}
              className="flex items-center gap-5 justify-center"
            >
              {heroIcons.map((icon) => (
                <a
                  href=""
                  target="_blank"
                  className="hover:text-[#1EBEF2] transition-colors"
                  key={icon.id}
                  rel="noopener noreferrer"
                >
                  <icon.icon size={30} />
                </a>
              ))}
            </motion.div>

            {/* btn wrapper */}
            <motion.div
              variants={variants.fadeInUp}
              className="mt-10 flex items-center gap-5 justify-center flex-wrap"
            >
              <Button
                label="Currículo"
                classes="primary-btn hover:bg-[#1EBEF2]"
                icon
                onClick={() => setModalOpen(true)}
              />
              <Button
                label="Contato"
                classes="secondary-btn hover:bg-[#1EBEF2]"
                icon2
                onClick={openWhatsapp}
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Modal para visualizar o currículo */}
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <embed
          src={pdfPath}
          type="application/pdf"
          width="100%"
          height="600px"
        />
        <div className="mt-4 flex justify-end">
          <a
            href={pdfPath}
            download
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-[#1EBEF2] transition"
          >
            Download CV
          </a>
        </div>
      </Modal>
    </>
  );
};

export default Hero;
