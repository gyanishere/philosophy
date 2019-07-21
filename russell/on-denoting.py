def denote(sentence, context):
    if (understand(context)):
        # how does context work with truth-value objects in Russell's logic. Look into this!
        return true
    else:
        raise ValueError("Invalid context. I cannot understand this expression.")

context = ['The classroom with 1 person named James', 'The world with many people named James']
denote('James', context[0])
