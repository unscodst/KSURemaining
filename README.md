# KSURemaining
An extension that allows you to see the remaining seats available for classes at Kent State University. 
If a class has seats remaining you will be notified to give you an opportunity to register.





TODO

- Get data to Message Pass to ksu.html, This will eliminate the need look at the console. 
I think this is literally the last front end thing I need.

Backend:
- Allow users to store class CRN's to avoid input every time
- Repeatedly Refresh/Pull Data from webpage
- Message Pass consistently updated data to ksu.html
- Allow Text/Email/Notification to happen 
 - if {
    seats remaining is <=5 or user set number (for friends)
    or >= 1 (assuming a class was full and now has 1++ spots open)




##Install

1. Download .zip

2. Extract "KSURemaining-master" folder to your preferred location

3. Open Chrome

4. On the Right side of Chrome click the Three Bars to open the settings menu

5. Select "More Tools" > "Extensions"

6. In Extensions click the checkbox next to "Developer Tools"

7. A new buttons will appear, click "Load Unpacked Extension..."

8. Navigate to the extracted "KSURemaining-master" folder

9. A new icon with a Golden "K" and Dark Blue background will appear in the upper right

10. Click this icon

11. Enter a CRN

12. Click submit

13. You will then be taken to the class page

14. Hit Ctrl+Shift+I or Right-Click and select Instpect Element and then click the Console Tab
