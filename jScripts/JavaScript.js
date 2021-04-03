function forFunc()
{
    
    if (parseInt(document.getElementById("number").value)>0)
        {
            
    //קליטת המספר שהוקלד
    var n = parseInt(document.getElementById("number").value);
    //יצירת משתנה בו תישמר בתוצאה
    var sum = 1;
    //שירשור הסימן עצרת ליד המספר שהוקלד-הצגת תחילת התרגיל
    document.getElementById('forResult').innerHTML = '!' + n.toString() + '=';
   
    //ביצוע הלולאה מספר פעמים בהתאם למספר שהוקלד.
    //הערך של האינדקס יתחיל ב1 ויגדל באחד בכל סיבוב. אין סיבה להתחיל ב0 כי הוא לא נכלל בחישוב.
    //הלולאה תמשיך כל עוד האינדקס קטן או שווה למספר שהוקלד 
    for (i = 1; i <=n; i++)
    {
       //שרשור מספר הסיבוב הנוכחי של הלולאה לתוך השכבה שמוצגת למשתמש, תוך שמירה על הערכים הקיימים בה. כלומר, קח את מה שכבר הודפס ותוסיף לאחריו את המספר הנוכחי
        document.getElementById('forResult').innerHTML = document.getElementById('forResult').innerHTML + i.toString();

        //  += באותו אופן, ניתן לכתוב גם באופן מקוצר באמצעות 
        //document.getElementById('forResult').innerHTML += i.toString();

        
        //הדפסת הסימן * - מעוניינים לבצע זאת בכלל סיבוב, פרט לסיבוב האחרון
        //זאת על מנת למנוע כוכבית מיותרת בסוף התרגיל
        //לכן, מבצעים תנאי לבדיקה האם לא מדובר בסיבוב האחרון של הלולאה
        //אם התנאי מתקיים, נדפיס כוכבית. ואם לא מתקיים, כלומר בסיבוב האחרון, לא נדפיס כוכבית
	// גם גאן, ההדפסה שומרת על הערך הקיים ורק מוסיפה את הכוכבית לאחר כל מה שכבר הודפס
        if (i != n)
        {
         document.getElementById('forResult').innerHTML = document.getElementById('forResult').innerHTML + '*';
        }
        //ביצוע חישוב העצרת בתוך המשתנה המיועד לשמירת התוצאה הסופית
        sum = sum * i;
    }
    //בסיום הלולאה, תסתיים פעולת החישוב של העצרה ונוכל להדפיס אותה
    //שרשור הסימן = ולאחריו התוצאה הסופית
      document.getElementById('forResult').innerHTML += '='+sum.toString();
            
       //   באותו אופן, ניתן לכתוב גם בצורת כתיבה מלאה באמצעות פניה לתיבת הטקסט, שימור הקיים בה ושרשור התוכן החדש
       //  document.getElementById('forResult').innerHTML = document.getElementById('forResult').innerHTML + '='+sum.toString();
            
        

    
        } else 
            {             
                alert ("הזן מספר גדול מ0");
            }
}

