class GenericFunction{

    
    monthsNames = {

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
            10: 'Octuber',
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
            years: years    
        };

        //console.log(time);


        
        return time;

    }



    getMonthName(month, idiom){
        
        if(month>=1 && month<=12){

            switch(idiom){
                case 1:
                    return this.monthsNames.spanish[month];
                    break;
                case 2:
                    return this.monthsNames.english[month];
                    break;
                case 3: 
                    return this.monthsNames.german[month];
                    break;
                default:
                    return this.monthsNames.spanish[month];
    
            }
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


}