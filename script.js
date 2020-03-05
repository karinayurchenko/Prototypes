class Student {
    constructor (university, course, fullName){
      this.university = university;
      this.course = course;
      this.fullName = fullName;
      this.marksArray = [5, 4, 4, 5];
      this.dismiss = false;
    };

   getInfo() {
        return this.university + " " + this.course + " " + this.fullName;;
    };

    get marks() {
        if (this.dismiss) {
            return null;
        }
            return this.marksArray;
        };

     set marks(value){
            return this.marksArray.push(value)
          };

    getAverageMark(){
            return (this.marksArray.reduce((sum, item) => sum += item, 0)) / this.marksArray.length
          };
    dismiss() {
            return this.dismiss = true
         };
       
     recover() {
            return this.dismiss = false
         }
       };   

    let student = new Student ('Высшей Школы Мошенничества г.Одесса', 1, 'Остап Родоманський Бендер')
    console.log(student.getInfo());
    console.log(`Массив оценок  => ${student.marks}`);
    console.log(`Студент получил дополнительную оценку ${student.marks = 5} => ${student.marks}`);
    console.log(`Средняя оценка студента => ${student.getAverageMark()}`);
  
    class BudgetStudent extends Student{
        constructor(university, course, fullName){
          super(university, course, fullName);
          this.interval();
        }
      
        getScholarship(){
          if(this.getAverageMark() >= 4 && !this.dismiss){
            console.log(`Вы получили 1400 грн. стипендии`);
          } else {
            console.log("Стипендия не начислена ");
          }
        };
        interval() {
            setInterval(() => {
              this.getScholarship();
            }, 30000)
          }
        };

        let newstudent = new BudgetStudent ('ЛНУ имени Ивана Франка ', 5, 'Юрченко Карина Олеговна')
console.log(newstudent.getInfo());