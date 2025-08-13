import React from "react";
import { contactItems } from "../constant/data";
import { RiGithubFill, RiLinkedinBoxFill, RiWhatsappFill } from "@remixicon/react";

// motion
import { motion } from "motion/react";
import * as variants from "../motion/animation";

const Contact = () => {
  return (
    <section className="py-20" id="contact">
      {/* wrapper centralizado */}
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mx-auto flex flex-col items-center justify-center px-4"
      >
        {/* card centralizado com largura máxima */}
        <motion.div
          variants={variants.fadeIn}
          className="w-full max-w-2xl text-center"
        >
          <h2 className="text-3xl font-semibold">Contato</h2>

          <p className="mt-3.5 mb-7 mx-auto max-w-xl">
            Estou sempre disposto a novos desafios. Entre em contato e vamos conversar sobre como posso contribuir. Aqui estão as minhas redes. Clique no ícone do Whatsapp e entre em contato.
          </p>

          {/* lista centralizada */}
          <ul className="space-y-3">
            {contactItems.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-center gap-3"
              >
                <p className="text-white font-semibold">{item.label}:</p>
                <a
                  href={item.href || "#"}
                  className="text-neutral-400 hover:text-[#1EBEF2]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.link}
                </a>
              </li>
            ))}
          </ul>

          {/* ícones centralizados */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <a
              href="https://www.linkedin.com/in/alvesalejr/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1EBEF2] transition-colors"
              aria-label="LinkedIn"
            >
              <RiLinkedinBoxFill size={30} />
            </a>
            <a
              href="https://github.com/alvesalejr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1EBEF2] transition-colors"
              aria-label="GitHub"
            >
              <RiGithubFill size={30} />
            </a>
            <a
              href="https://wa.me/5561984250137?text=Olá,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar."
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1EBEF2] transition-colors"
              aria-label="Whatsapp"
            >
              <RiWhatsappFill size={30} />
            </a>
          </div>

          {/* Copyright */}
          <p className="mt-10 text-sm text-neutral-500">
            &copy; 2025 <strong>Alessandro Junior</strong>. Todos os direitos reservados.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
