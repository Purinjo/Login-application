import psycopg2

conn =  psycopg2.connect(
    database = "wordcount_dev",
    user = "postgres",
    password = "golovode",
    host = "localhost",
    port = 5432
)

print("conected to posgreSQL DB")