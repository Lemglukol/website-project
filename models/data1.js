import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const data1 = db.define('r1_wonosobo', {
    suhu:{
        type: DataTypes.STRING
    },
    humid:{
        type: DataTypes.STRING
    },
   lat:{
        type: DataTypes.STRING
    },
    long:{
        type: DataTypes.STRING
    },
    orient:{
        type: DataTypes.STRING
    },
    grav:{
        type: DataTypes.STRING
    },
    hujan:{
        type: DataTypes.STRING
    },
    waktu:{
        type: DataTypes.STRING
    }
});

export default data1;