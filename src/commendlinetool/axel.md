# axel 

## Axel is a download accelerator that downloads a file from a URL using multiple connections.

## installation on mac
```zsh
brew install axel
```

## usage
```zsh
# download a file from a URL
axel http://example.com/file.zip

# multiple connections
axel -n 10 http://example.com/file.zip

# batch download
# axel don't support batch download, but you can use a script to download multiple files
# links.txt includes the URLs of the files you want to download

while read line; do axel $line; done < links.txt
# or 
while read line; do axel -n 10 $line; done < links.txt

```






