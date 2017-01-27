from selenium.webdriver import ActionChains
from selenium.webdriver.common.by import By
from selenium.webdriver.support.expected_conditions import presence_of_element_located
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium import webdriver
from time import sleep
from server_python import start_server

########### PREPARAR AMBIENTE ###############
start_server(port=8007, bind='127.0.0.1')
#####################################


driver = webdriver.Chrome(executable_path="/home/dev/Documents/bin/chromedriverLinux64")
driver.maximize_window()

# need - pip3 install PyUserInput
mouse = PyMouse()

driver.get("https://127.0.0.1:8009/jogo_da_velha/index.html")
driver.implicitly_wait(10)

def SelectorWait(driver, locator):
    return WebDriverWait(driver, 50).until(presence_of_element_located((By.CSS_SELECTOR, locator)))


# Get iframe location x and y.
web_element = SelectorWait(driver, "ul.row #two")

print(web_element.get_attribute('class'))
value = web_element.get_attribute('class')

dic_jogo = {"1":"false","2":"false","3":"false", "4":"false","5":"false",
"6":"false","7":"false","8":"false", "9":"false"
}


# def verified(i):
#     while True:
#         field_password = SelectorWait(driver, "#txtcd_Pwd")
#         print(field_password.text)
#         if (len(field_password.text)) == i:
#                 return True
#         sleep(3)
#
# i=1
# # move cursor and click
# for key, numbers in sorted(dic_linux.items()):
#
#     move_cursor(numbers)
#     sleep(3)
#     click(numbers)
#     print(key, numbers)
#     verified(i)
#     i+=i
#
# driver.execute_script("""
#                 function Color(){
#                 var x = document.getElementById('layerTeclado');
#                 x.style.left = '0px';
#                 x.style.top = '0px';
#                 x.style.visibility = 'visible';
#                 }
#                 Color();
# """)
