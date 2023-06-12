import { motion } from "framer-motion"

const TransitionEffect = () => {
    return (
        <div>
            <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-lime-600 " 
            initial={{ x: "100%", width: "100%"}} 
            animate={{ x: "0%", width: "0%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            />
            <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-white" 
            initial={{ x: "100%", width: "100%"}} 
            animate={{ x: "0%", width: "0%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            />
            <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-red-700" 
            initial={{ x: "100%", width: "100%"}} 
            animate={{ x: "0%", width: "0%" }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
            />
        </div>
    );
};

export default TransitionEffect;