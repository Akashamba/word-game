import sqlite3

db = sqlite3.connect('Words', check_same_thread=False)
c = db.cursor()
c.execute('''CREATE TABLE IF NOT EXISTS todo(Example TEXT,Meaning TEXT,Type TEXT,Word TEXT PRIMARY KEY)''')
# c.execute('''CREATE TABLE IF NOT EXISTS done(Task TEXT)''')
# INSERT into todo (&a,&b,&c,&d,&e)
c.execute(""" DELETE From todo """)


c.execute("""INSERT into todo (Example,Meaning,Type,Word ) VALUES('At the denouement of the movie, all questions were answered, and the true identity of the robber was revealed.','the final resolution of the many strands of a literary or dramatic work; the outcome of a complex sequence of events','noun','denouement')""")
c.execute("""INSERT into todo (Example,Meaning,Type,Word ) VALUES('Over the years of service, and quite to his surprise, he became a puissant advisor to the community.','powerful','adjective','puissan')""")
c.execute("""INSERT into todo (Example,Meaning,Type,Word ) VALUES('This word has other definitions but this is the most important one to study','cause to take on a definite and clear shape','verb','crystallize')""")
c.execute("""INSERT into todo (Example,Meaning,Type,Word) VALUES('Even as a young man, Bob had some bias against poor people, but during his years in social services, his bad opinions ossified into unshiftable views.','make rigid and set into a conventional pattern','verb','ossify')""")
c.execute("""INSERT into todo (Example,Meaning,Type,Word) VALUES('Jacks vulgar jokes were not so successful in the rarefied environment of college professors.','made more subtle or refined','adjective','rarefied')""")
c.execute("""INSERT into todo (Example,Meaning,Type,Word) VALUES('At first the hostess tried intimation, praising the benefits of cutlery; when Cecil continued eating with his hands, the hostess told him to use a fork at dinner.','an indirect suggestion','noun','Yaintimation')""")
c.execute("""INSERT into todo (Example,Meaning,Type,Word) VALUES('The king and queen cosseted the young prince, giving him a prized miniature pony for his fifth birthday.','treat with excessive indulgence','verb','cosset')""")
c.execute("""INSERT into todo (Example,Meaning,Type,Word) VALUES('Although Sam was trying to honor Marks sense of humor, many found it quite flippant that he wore a comic nose and glasses mask to Marks funeral.','Although Sam was trying to honor Marks sense of humor, many found it quite flippant that he wore a comic nose and glasses mask to Marks funeral.','adjective','flippant')""")
c.execute("""INSERT into todo (Example,Meaning,Type,Word) VALUES('The modern supermarket experience makes many feel claustrophobic, as they are immured in walls upon walls of products.','to enclose, usually in walls','verb','immure')""")
c.execute("""INSERT into todo (Example,Meaning,Type,Word) VALUES('On the night that Lincoln would be fatally shot, his wife had a presentiment about going to Fords Theater, but Lincoln persuaded her that everything would be fine.','a feeling of evil to come','noun','presentiment')""")
c.execute("""INSERT into todo (Example,Meaning,Type,Word ) VALUES('Dexter, distraught over losing his pet dachshund, Madeline, found the police officers questions','improperly forward or bold','adjective','impertinent')""")

# c.execute("""DROP TABLE todo""")


db.commit()

def Vals():
    c.execute('''select * from todo order by RANDOM() LIMIT 10''')
    data=c.fetchall()
    db.commit()
    return data

