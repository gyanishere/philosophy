# causal theory

baby = None

causalStory = array()

def baptism(name, reference):
    # also known as reference-grounding
    causalStory.append(baptism)

def referenceBorrowing(index, name):
    # find reference in causalstory based on index
    reference = causalStory[index]
    return reference

#causal story

# "Baptism"/reference-grounding: baby was born and named "Gyan" by parents
baptize('Gyan', baby)

referenceBorrowing('This fellow Gyan went to the park.', 'Gyan')
