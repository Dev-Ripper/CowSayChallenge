var cowsay = require("cowsay");

let nom = "J";
let campus = "Reims";

const infos = () => {
    console.log(cowsay.say({
        text : `Hi my name is ${nom}, and i am in the ${campus} campus.`,
        e : "oO",
        T : "U "
    }));
};

module.exports = infos;