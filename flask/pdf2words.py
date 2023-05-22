import PyPDF2

# Open the PDF file
pdf_file = open('extractwords.pdf', 'rb')

# Read the PDF file using the PdfFileReader class
pdf_reader = PyPDF2.PdfReader(pdf_file)

# Extract all the words from the PDF file
words = []
for page in range(len(pdf_reader.pages)):
    text = pdf_reader.pages[page].extract_text()
    words.extend(text.split())

# Close the PDF file
pdf_file.close()

# Print the words
#print(words)
import re

# Define the array of words

# Define the regular expression for matching illegal characters
illegal_chars_pattern = re.compile('[^a-zA-Z]')

# Create a new array with only the legal words
legal_words = []
for word in words:
    if not illegal_chars_pattern.search(word):
        legal_words.append(word)

# Print the legal words
#print(legal_words)
#words = ['a', 'fox', 'jumped', 'over', 'the', 'lazy', 'dog']

# Remove elements of length 1
words = [word for word in words if len(word) != 1]

#print(words)  # Output: ['fox', 'jumped', 'over', 'the', 'lazy', 'dog']
#import re

#words = ['Hello', 'world!', 'How', 'are', 'you', 'doing', 'today?', 'I', 'hope', 'everything', 'is', 'going', 'well.']

# Remove elements that contain unwanted characters
words = [word for word in words if not re.search(r'[.,;:"?\’éâ“‘»\-\'/«ô()É…êïç!Ç\]ë1œî°\*2à34û”5ü67-890èùú+[]', word)]

#print(len(words))  # Output: ['Hello', 'How', 'are', 'you', 'doing', 'I', 'hope', 'everything', 'is', 'going']
#words = ['apple', 'banana', 'cherry', 'banana', 'apple', 'date', 'date', 'cherry']

# Remove duplicates and sort the array
words = sorted(set(words))

print(words)  # Output: ['apple', 'banana', 'cherry', 'date']
# create an empty set to store unique characters
unique_chars = set()

# iterate through each word in the array
for word in words:
    # iterate through each character in the word
    for char in word:
        # add the character to the set if it's not already in there
        if char not in unique_chars:
            unique_chars.add(char)

# print out the unique characters
print("Unique characters: ", end="")
for char in unique_chars:
    print(char, end=" ")
print(len(words))
import nltk
nltk.download('words')

def remove_english_words(arr):
    # Load set of English words
    english_words = set(nltk.corpus.words.words())

    # Filter out strings that contain English words
    return [s for s in arr if not any(word.lower() in english_words for word in s.split())]


words=remove_english_words(words)
#words=remove_french_words(words)
print(words)
print(len(words))
import pandas as pd
lex = pd.read_csv('http://www.lexique.org/databases/Lexique383/Lexique383.tsv', sep='\t')
lex.head()
print(lex[''])