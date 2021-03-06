class GenericFunction{

   

    dateDiff(startDate, endDate){
        //this function returns a JSON with diference time beetween startDate and endDate
        
        if(startDate <= endDate){
           

            var years = endDate.getFullYear() - startDate.getFullYear();

            var months = endDate.getFullYear() === startDate.getFullYear() ? 
                            endDate.getMonth() - startDate.getMonth() : 
                            ( (12 - startDate.getMonth() ) + endDate.getMonth() ) % 12 
            ;
            
            var days = endDate.getDate() - 1;

                if(months===0){
                    months=0;
                }
                else{
                    if(endDate.getMonth() < startDate.getMonth()){
                        months--;
                        years--;
                    }
                }
                    //console.log(years);
                    //console.log(months);
                    //console.log(days);
        }

        var time = {
            days: days,
            months: months,
            years: years,  
        };

        //console.log(time);


        
        return time;

    }



    getMonthName(month){
        
            return {

                name: monthsNames.spanish[month],
                idTranslate: 100 + month 
                
            }
                   
        
    } 


    
    //...array

    prom(array){
        
        //return prom of undefined number of parameters

        var prom = 0; 
        
        array.forEach(element => {
            prom += element;
        });

        prom = prom / array.length;

        return prom;
    }

    counter(element, start, end, duration) {
            
            
            var range = end - start;
            var current = start;
            var increment = end > start? 1 : -1;
            var stepTime = Math.abs(Math.floor(duration / range));
            //var obj = document.getElementById(id);
            var obj = element;
            var timer = setInterval(function() {
                current += increment;
                obj.innerHTML = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, stepTime);
        }

    
        //Counter Effect
        //let obj = document.querySelector(element);
        /* var current = 0;
        var range = end;
        var increment = 1;
        var element = 0;

        step = Math.ainbs(Math.floor(duration / range));

        timer = setInterval(() => {
            current += increment;
            //element.textContent = current;
            element = current;
            if (current == end) {
             clearInterval(timer);
            }
        }, step);

        console.log(element);

    } */

    formatDate(
        date,
        format
    ){
        var idiom = document.querySelector('#idiomSelected').getAttribute('idiom');

        if(idiom){
            switch(format){
                case 1:
    
                    switch(idiom){
                        case 'spanish':
                            return date.getDate() + ' de ' + monthsNames.spanish[date.getMonth()+1] + ' de ' + date.getFullYear();
                        break;
                        case 'english':
                            var lastcharacter = date.getDate().toString();
                            var dayPostfix = lastcharacter === '1' ? 'st': lastcharacter === '2' ? 'nd' : lastcharacter === '3' ? 'rd' : 'th'
                            return monthsNames.english[date.getMonth()+1] + ' ' + date.getDate() + dayPostfix + ' ' + date.getFullYear();
                        break;
                        case 'german':
                            return date.getDate() + ' ' + monthsNames.english[date.getMonth()+1] + ' ' + date.getFullYear() ;
                        break;
                        default:
                            return date.getDate() + ' de ' + monthsNames.spanish[date.getMonth()+1] + ' de ' + date.getFullYear();
                            break;
                    }
                    
                break;
                case 2:
                    break;
                case 3:
                    break;
                default:
                    return date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear();
            }

        }
        
    }

}


const monthsNames = {

    spanish: {
        1:  'Enero',
        2:  'Febrero',
        3:  'Marzo',
        4:  'Abril',
        5:  'Mayo',
        6:  'Junio',
        7:  'Julio',
        8:  'Agosto',
        9:  'Septiembre',
        10: 'Octubre',
        11: 'Noviembre',
        12: 'Diciembre',
    } ,
    english: {
        1:  'Jenuary',
        2:  'Febrery',
        3:  'March',
        4:  'April',
        5:  'May',
        6:  'June',
        7:  'July',
        8:  'August',
        9:  'September',
        10: 'October',
        11: 'November',
        12: 'December',
    } ,
    german: {
        1:  'Januar',
        2:  'Februar',
        3:  'März',
        4:  'April',
        5:  'Mai',
        6:  'Juni',
        7:  'Juli',
        8:  'August',
        9:  'September',
        10: 'Oktober',
        11: 'November',
        12: 'Dezember',
    } 
}