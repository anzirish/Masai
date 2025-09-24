import os from "os";

export const getSystemInfo = () => {
  console.log("System information:");
  console.log("-".repeat(20));

  console.log("Architecture :", os.arch());
  console.log("CPU cores", os.cpus().length);
  const [{ model }] = os.cpus();
  console.log("CPU model:", model);
  console.log("CPU speed:", model.slice(-7));
  console.log(
    "Total mempry :",
    Math.ceil(os.totalmem() / (1024 * 1024 * 1024)),
    "GB"
  );
  console.log(
    "Free memory :",
    Math.ceil(os.freemem() / (1024 * 1024 * 1024)),
    "GB"
  );
  console.log(
    "Heap memory used :",
    Math.ceil(process.memoryUsage().heapUsed / (1024 * 1024)),
    "MB"
  );
  console.log(
    "Heap memory total :",
    Math.ceil(process.memoryUsage().heapTotal / (1024 * 1024)),
    "MB"
  );
  console.log("Host name :", os.hostname());
  console.log("OS Type :", os.type());
};
