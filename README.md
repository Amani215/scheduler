#UI and Abstract
This web app is a schedule display app.
It is divided into a timetable, a notification section, a header and a footer. The timetable and the notification section represent the 2 main parts of the app.

##MAIN PARTS:
1. The timetable component is the larger one. It contains the timetable which should be displayed as a matrix with 7 columns(for the days) and 24 rows(for the hours). 
Highlighting the tasks is done through coloring. The current task will be colored differently than the other tasks.

2. The notification component is the smaller one. This part contains the notifications which will be displayed as an array of “closable” notifications about overdue tasks.

#UX
The user should be able to see the dates, the current date as well as all the tasks for the week. The current tasks and the overdue tasks should be highlighted (As mentioned above the overdue tasks will be displayed in the right column). 
Only the text content of the task should be displayed, displaying the other data of the task will be implemented in future features.

#API
The JSON file contains an object of 7 arrays each of the represents a day and contains several other objects(as many objects as the tasks for that day). Each of those objects inside the arrays contains a starting date, an ending date and a text content.

#Algorithm and Logic
The App checks for the tasks in the API and puts them properly in the timetable. Then it checks the current time, and decides the current task and the overdue tasks. Finally it sets a reminder state with the upcoming important event time (end of task or beginning of task) to refresh the overdues and current task. The process of reminding and refreshing also gets done each time a task starts or ends.

#Software implementation
The set of all tasks and the upcoming reminder are states in App.tsx Component.
After fetching all the data from the API, an extra property is added before exporting it to the state. The property in question is the status, and only the following values are accepted: upcoming, current, overdue, done. 
The App component passes all the tasks to the Timetable Component as props. It also filters the overdue tasks to the Notifications component.
