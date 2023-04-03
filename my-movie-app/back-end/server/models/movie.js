import { Model, DataTypes } from 'sequelize';
import sequelize from '../db';

class Movie extends Model { }

Movie.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    watched: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}, {
    sequelize,
    modelName: 'movie'
});

module.exports = Movie;