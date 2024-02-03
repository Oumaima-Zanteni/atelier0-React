const findLongestWord = (wordArray) => {
    
    const wordObjects = wordArray.map(word => ({ mot: word, longueur: word.length }));
    
    const longestWordObject = wordObjects.reduce((acc, current) => (current.longueur > acc.longueur ? current : acc), { longueur: 0 });
  
    return { mot: longestWordObject.mot, longueur: longestWordObject.longueur };
  };
  
 
  const words = ["oumaima", "hello", "Bonjour"];
  // const result = findLongestWord(words);
  
 // console.log(result);
  
  const countOccurrences = (inputArray) => {
    const flatArray = inputArray.flat();
    const occurrences = flatArray.reduce((acc, current) => {
      acc[current] = (acc[current] || 0) + 1;
      return acc;
    }, {});
  
    return occurrences;
  };

  const inputArray = [
    ["a", "b", "c"],
    ["a", "b", "c", "a"],
    ["c", "d", "e"],
    ["a", "b"]
  ];
  
  //const result = countOccurrences(inputArray);
  
 // console.log(result);
  

  const calculateTotalWithBonus = (students) => {
    const studentsWithBonus = students.map(student => ({
      name: student.name,
      score: student.score < 50 ? student.score + 15 : student.score
    }));
  
    const passedStudents = studentsWithBonus.filter(student => student.score > 50);
  
    const totalScore = passedStudents.reduce((acc, current) => acc + current.score, 0);
  
    return totalScore;
  };
  const students = [
    { name: "Alice", score: 60 },
    { name: "Bob", score: 40 },
    { name: "Charlie", score: 75 },
    { name: "David", score: 30 }
  ];
  
 // const result = calculateTotalWithBonus(students);
  
 // console.log(result);


 let lastId = 0;
 const Tab = [];
 
 const addObject = (data) => {
   lastId++;
   const newObj = { ...data, ID: lastId };
   Tab.push(newObj);
 };
 
 const searchByIdFunction = (array, id) => {
   return array.find(item => item.ID === id);
 };
 
 addObject({ name: "John", id: 123, marks: 98 });
 addObject({ name: "Baba", id: 101, marks: 23 });
 addObject({ name: "John", id: 200, marks: 45 });
 addObject({ name: "Wick", id: 115, marks: 75 });
 
 console.log(Tab);
 
 const result = searchByIdFunction(Tab, 1);
 console.log(result);
 
 export default Tab;
 
 



  