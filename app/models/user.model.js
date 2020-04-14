module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    // uuid: {
    //   type: Sequelize.UUID,
    //   defaultValue: Sequelize.UUIDV4 // Or Sequelize.UUIDV1
    // },
    // schoolId: {
    //   type: Sequelize.INTEGER
    // },
    // role: {
    //   type: Sequelize.STRING
    // },
    // photoURL: {
    //   type: Sequelize.STRING,
    //   defaultValue: 'assets/images/avatars/profile.jpg'
    // },
    // email: {
    //   type: Sequelize.STRING
    // },
    // password: {
    //   type: Sequelize.STRING
    // },
    // phone: {
    //   type: Sequelize.STRING
    // },
    // firstName: {
    //   type: Sequelize.STRING,
    //   defaultValue: 'SMS User'
    // },
    // middleName: {
    //   type: Sequelize.STRING
    // },
    // lastName: {
    //   type: Sequelize.STRING
    // },
    // fatherFirstName: {
    //   type: Sequelize.STRING
    // },
    // fatherMiddleName: {
    //   type: Sequelize.STRING
    // },
    // fatherLastName: {
    //   type: Sequelize.STRING
    // },
    // motherFirstName: {
    //   type: Sequelize.STRING
    // },
    // motherMiddleName: {
    //   type: Sequelize.STRING
    // },
    // motherLastName: {
    //   type: Sequelize.STRING
    // },
    // occupation: {
    //   type: Sequelize.STRING
    // },
    // religion: {
    //   type: Sequelize.STRING
    // },
    // facebook: {
    //   type: Sequelize.STRING
    // },
    // twitter: {
    //   type: Sequelize.STRING
    // },
    // linkedin: {
    //   type: Sequelize.STRING
    // },

    school_id: {
      type: Sequelize.INTERGER
    },
    university_id: {
      type: Sequelize.INTERGER
    },
    name: {
      type: Sequelize.STRING
    },
    role: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    logo: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING
    },
    ext: {
      type: Sequelize.STRING
    },
    mobile: {
      type: Sequelize.STRING
    },
    title: {
      type: Sequelize.STRING
    },
    state: {
      type: Sequelize.INTERGER
    }


  });

  return User;
};
