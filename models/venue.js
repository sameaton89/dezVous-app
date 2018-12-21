module.exports = function(sequelize, DataTypes) {
    var Venues = sequelize.define("Venues", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [255]
        }
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [300]
        }
      },
      website: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [300]
      },
      phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [300]
      },

    })
    return Venues;
};