import { motion } from "framer-motion";

function FramerMotion({children}){

    return(
        <motion.div>
            {children}
        </motion.div>
    );
}
