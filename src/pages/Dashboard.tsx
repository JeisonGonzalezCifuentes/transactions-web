import { motion } from "framer-motion";
import Header from "../components/Header";
import AccountsTable from "../components/AccountsTable";
import Hero from "../components/Hero";

const Dashboard = () => {
  return (
    <div className="relative min-h-screen overflow-hidden text-[#03ff94]">
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0.8, scale: 1 }}
        animate={{ opacity: 1, scale: 1.05 }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 5,
          ease: "easeInOut",
        }}
        style={{
          background:
            "radial-gradient(circle at center, #4d9c7b 0,1%, #000000 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 p-6 md:p-8">
        <Header />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Hero />
          <AccountsTable />
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
