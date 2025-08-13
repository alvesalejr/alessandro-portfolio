import React from "react";
import { ResumeItems } from "../constant/data";

//motion
import { motion } from "motion/react";
import * as variants from "../motion/animation";

const Experience = () => {
  return (
    <section className="section" id="resume">
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        <motion.h2 variants={variants.fadeInUp}></motion.h2>
        {/* Wrapper */}
        <div className="grid gap-10 lg:gap-20 lg:grid-cols-2">
          {ResumeItems.map((item) => (
            <motion.div
              variants={variants.fadeInUp}
              key={item.id}
              className="divide-y divide-neutral-800"
            >
              {/* title */}
              <h3
                className="text-2xl font-semibold mt-8 pb-3 border-b-2"
                style={{ borderColor: "#1EBEF2" }}
              >
                {item.title}
              </h3>
              {/* list */}
              <div className="mt-10 space-y-8">
                {item.list.map((listItem, index) => (
                  <div key={index} className="flex items-start gap-6">
                    <div>
                      <h4 className="text-xl">{listItem.role}</h4>
                      <p>{listItem.label}</p>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: listItem.description
                            ? listItem.description.replace(/\n/g, "<br />")
                            : "",
                        }}
                      ></p>
                    </div>

                    <p className="ml-auto border border-neutral-700 p-2.5 text-white whitespace-nowrap">
                      {listItem.time}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
