import json

f = open('steamDBDetails_Cleaned.json', 'r')
data = json.load(f)
f.close()

print(data)

allCategories = {}

for appID in data:
    if data[appID]["success"] == True:
        appData = data[appID]["data"]
        if "categories" in appData:
            for c in appData["categories"]:
                print("C", c)
                if c["description"] not in allCategories:
                    allCategories[c["description"]] = 0
                allCategories[c["description"]] += 1

try:
    f = open("allCategories_F", "w")
except FileNotFoundError:
    f = open("allCategories_F", "w")

json.dump(allCategories, f)

f.close()

#test


