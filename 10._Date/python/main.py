from datetime import datetime

# print current date and time
current_datetime = datetime.now()
print(current_datetime)

# it prints milliseconds too

# if you wanna choose how the format is printed
print(current_datetime.strftime('%Y-%m-%d %H:%M:%S'))