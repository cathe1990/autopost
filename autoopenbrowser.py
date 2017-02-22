"""AutoMatically open a list of urls
"""

import webbrowser
import time


def main():

    url_list = ['https://www.douban.com/group/topic/95682442', 
                'https://www.douban.com/group/topic/95921496', 
                'https://www.douban.com/group/topic/95728847', 
                'https://www.douban.com/group/topic/95729036', 
                'https://www.douban.com/group/topic/95728951']
    chrome_path = 'open -a /Applications/Google\ Chrome.app %s'

    short_rest = 60*1
    long_rest = 60 * 5

    while True:
        for url in url_list:
            webbrowser.get(chrome_path).open(url)
            print('{} opened, now I will rest for {} seconds.'.format(url, short_rest))  # nopep8
            time.sleep(short_rest)  # sleep for 5 minutes
        print('All urls opened, now I will rest for {} seconds'.format(long_rest))  # nopep8
        time.sleep(long_rest)   # sleep for 30 minutes

if __name__ == '__main__':
    main()
