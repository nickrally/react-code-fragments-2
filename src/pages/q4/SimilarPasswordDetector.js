import { useForm } from "react-hook-form";

const allVowels = ["a", "e", "i", "o", "u"];

const SimilarPasswordDetector = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { password: "hack" } });

  const countMinimumOperations = (password) => {
    let steps = 0;
    let isSimilar = false;
    const vowels = password.match(/[aeiou]/gi); //allows dupes
    const consonants = vowels
      ? Array.from(password).filter((c) => !vowels.includes(c))
      : Array.from(password);
    const diff = vowels ? consonants.length - vowels.length : consonants.length;
    if (diff === 0) isSimilar = true; //already similar
    else if (diff > 0) {
      //change some consonant(s) to vowel(s)
      for (let i = 0; i < consonants.length - 1; i++) {
        const prevChar = String.fromCharCode(consonants[i].charCodeAt() - 1);
        console.log("prevChar of", consonants[i], "is:", prevChar);
        if (allVowels.includes(prevChar)) {
          steps++;
          console.log("steps++", steps);
          if (steps === parseInt(diff / 2)) return steps;
        } else {
          if (consonants[i] !== "z") {
            const nextChar = String.fromCharCode(
              consonants[i].charCodeAt() + 1
            );
            console.log("nextChar of", consonants[i], "is:", nextChar);
            if (allVowels.includes(nextChar)) {
              steps++;
              console.log("steps++", steps);
              if (steps === parseInt(diff / 2)) return steps;
            }
          }
        }
      }
    } else if (diff < 0) {
      //change some vowel(s) to consonant(s)
      for (let i = 0; i < vowels.length - 1; i++) {
        const nextChar = String.fromCharCode(vowels[i].charCodeAt() + 1);
        console.log("nextChar", nextChar);
        if (!allVowels.includes(nextChar)) {
          steps++;
          console.log("steps++", steps);
          if (steps === Math.abs(parseInt(diff / 2))) return steps;
        } else {
          if (vowels[i] !== "a") {
            const prevChar = String.fromCharCode(vowels[i].charCodeAt() - 1);
            console.log("prevChar", prevChar);
            if (!allVowels.includes(prevChar)) {
              steps++;
              console.log("steps++", steps);
              if (steps === Math.abs(parseInt(diff / 2))) return steps;
            }
          }
        }
      }
    }
    return isSimilar ? 0 : steps > 0 ? steps : -1; //e.g. "zzzz" returns -1
  };

  const parseSubmitData = ({ password }) => {
    console.log(countMinimumOperations(password));
  };

  return (
    <>
      <form onSubmit={handleSubmit((data) => parseSubmitData(data))}>
        <input
          {...register("password", {
            required: "This is required",
            validate: {
              even: (value) => value.length % 2 === 0,
              moreThan3: (value) => value.length > 3,
            },
          })}
          placeholder="Password"
        />
        {errors.password && errors.password.type === "even" && (
          <p>Must be an even number of characters!</p>
        )}
        {errors.password && errors.password.type === "moreThan3" && (
          <p>Must be more than 3 characters</p>
        )}
        <input type="submit" />
      </form>
    </>
  );
};

export default SimilarPasswordDetector;
