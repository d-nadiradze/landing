"use client"
import React, { useEffect, useState } from "react";
import {CheckedIcon,Xmark} from "@/shared/ui/icons";
import { motion } from "framer-motion";

type NotificationProps = {
  message: string | number;
  type: "error" | "success";
};

export const Notification: React.FC<NotificationProps> = ({ message, type }) => {
  const [color, setColor] = useState("");

  useEffect(() => {
    if (type === "error") {
      setColor("bg-error");
    } else {
      setColor("bg-purple");
    }
  }, [type]);

  return (
      <motion.div
          initial={{y: -200, x: "-50%"}}
          animate={{y: 20, x: "-50%"}}
          exit={{y: -200}}
          className={`fixed left-1/2 -translate-x-1/2 z-[1000] rounded-lg text-white text-sm px-4 py-3 ${color} w-5/6 md:w-auto`}
      >
        <div className={"flex items-center gap-x-3.5"}>
          <div
              className={
                "flex items-center justify-center w-5 h-5 bg-white rounded-full"
              }
          >
            {type === "success" ? (
                <CheckedIcon color={"#453BF5"} size={14}/>
            ) : (
                <Xmark color={"#FF4C50"} width={12} height={12}/>
            )}
          </div>

          <p>{message}</p>
        </div>
      </motion.div>
  );
};
