const Data = [
     {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwKdJ5wMvWigyuVXSc7RmA8-fKyq9wVxNtfw&s",
    name: "Push-Up",
    desc: "A classic bodyweight exercise targeting the chest, shoulders, and triceps.",
    explanation: "Push-ups are excellent for building upper body strength and core stability. Keep your body straight and lower your chest to the floor with control."
  },
  {
    img: "https://spotebi.com/wp-content/uploads/2014/10/squat-exercise-illustration.jpg",
    name: "Squat",
    desc: "A compound movement that works the legs and glutes.",
    explanation: "Squats improve lower body strength and flexibility. Keep your back straight, feet shoulder-width apart, and lower yourself like sitting in a chair."
  },
  {
    img: "https://media.istockphoto.com/id/1204463032/vector/woman-doing-plank-exercise-on-blue-mat-with-stopclock-symbol-over-her-head.jpg?s=612x612&w=0&k=20&c=gmOmI8TkKt9deB1Mh3pAAA8DWBPVc7QBIdMh9r0NAQ8=",
    name: "Plank",
    desc: "An isometric core exercise that builds endurance.",
    explanation: "The plank strengthens your abs, back, and shoulders. Maintain a straight line from head to heels and avoid sagging your hips."
  },
  {
    img: "https://cdn.prod.website-files.com/62e18da95149ec2ee0d87b5b/65b0d643eb8c14b2ff3c6eaf_thumbnail-image-65ae476a9d643.webp",
    name: "Jumping Jacks",
    desc: "A cardio move that boosts heart rate and warms up the body.",
    explanation: "Jumping jacks increase cardiovascular endurance and coordination. Jump with your arms and legs moving outward and inward rhythmically."
  },
  {
    img: "https://images.ctfassets.net/hjcv6wdwxsdz/2bQRCnH8foEemorHTvK44n/be6097a413f930f637e3dd3bf905ce6f/lunge.png?w=1200",
    name: "Lunges",
    desc: "A unilateral leg exercise targeting the thighs and glutes.",
    explanation: "Lunges improve balance and leg strength. Step forward with one leg, lower your hips, and push back to the starting position."
  },
  {
    img: "https://images.healthshots.com/healthshots/en/uploads/2023/03/16013822/Burpees.jpg",
    name: "Burpees",
    desc: "A full-body workout that combines strength and cardio.",
    explanation: "Burpees burn fat and build endurance. Perform a squat, jump into a plank, do a push-up, return to squat, and jump up explosively."
  }
]

export default Data;

export const initialValues = {
  email: "",
  password: "",
  confirmPassword: ""
}

import * as Yup from 'yup'

export const LoginSchema = Yup.object({
    email: Yup.string().required("Email feild is a required feild.").email(),
    password: Yup.string().required("Password is a required feild.").min(6, "Minimum 6 characters are required."),
    confirmPassword: Yup.string().required("Confirm Password cannot be empty.").oneOf([Yup.ref('password'),null],"Password must be matched !")
  }
);

export const SignUpSchema = Yup.object({
  name: Yup.string().required("Name is a required field."),
  email: Yup.string().required("Email is a required field.").email("Email must be vaild."),
  password: Yup.string().required("Password is a required field.").min(6,"Password atleast of 6 characters!")
})

export const initialValues1 = {
  name: "",
  email: "",
  password: ""
}