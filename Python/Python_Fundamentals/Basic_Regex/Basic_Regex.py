# #Basic Regex
#
# import re
#
# regex = (r"v" , r"ss", r"e$", r"b.b", r"b*b", r"b+b",r"(.)\1", r"^aeiou$")
# # ^ = starts with $ = ends with. and example ^.....$ = starts with, has 5 words and ends with.
# # b.b anything with a b and next with a b.
# # b+b, any amount of b, and then next b.
# #r"(.)\1", for double letters
# #r"^aeiou$" for all vowels
# def get_matching_words(regex):
#     words = ["aimlessness", "assassin", "baby", "beekeeper", "belladonna", "cannonball", "crybaby", "denver", "embraceable", "facetious", "flashbulb", "gaslight", "hobgoblin", "iconoclast", "issue", "kebab", "kilo", "laundered", "mattress", "millennia", "natural", "obsessive", "paranoia", "queen", "rabble", "reabsorb", "sacrilegious", "schoolroom", "tabby", "tabloid", "unbearable", "union", "videotape"]
#     matches = []
#     for word in words:
#         for reg in regex:
#             if re.search(reg,word):
#                 matches.append(word)
#     return matches
# print get_matching_words(regex)


import re
# ^ = starts with  $ = ends with. and example ^....$ = starts with, has 5 words and ends with.

def get_matching_words(regex):
 words = ["aimlessness", "assassin", "baby", "beekeeper", "belladonna", "cannonball", "crybaby", "denver", "embraceable", "facetious", "flashbulb", "gaslight", "hobgoblin", "iconoclast", "issue", "kebab", "kilo", "laundered", "mattress",
 "millennia", "natural", "obsessive", "paranoia", "queen", "rabble", "reabsorb", "sacrilegious", "schoolroom", "tabby", "tabloid", "unbearable", "union", "videotape"]
 matches = []

 for word in words:
 	if re.search(regex,word):
 		matches.append(word)
 return matches
# print get_matching_words(regex)
print get_matching_words(r"v")
print get_matching_words(r"ss")
print get_matching_words(r"e\b")
print get_matching_words(r"b\wb")
print get_matching_words(r"b\w*b")
print get_matching_words(r"a.*e.*i.*o.*u")
print get_matching_words(r"^[regular expression]*$")
print get_matching_words(r"([A-Za-z])\1")
# last one sorts out ones that are only letters and not other numbers or symbols
