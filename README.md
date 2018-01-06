# SmartEqual
value equal checker, like java and C++, if only every property is equal then the object is equal.  
**SmartEqual is deep equal checker, it's very convienent in some circumstances.**

# install
npm install --save smart-equal

# require and attention
this library use es2015 to write its code, this may cause any project using this library also need to use es2015.

# usage example

you can view the full usage example within test/index.test.js, just remember its simple and easy to use.

<code>
    'use strict';  
  
    import smartAssign from 'smart-equal';  
  
    let a = {  
        a1: 'a1',  
        a2: 2,  
        a3: true,  
        a4: () => {  
            return data;  
        },  
        a5: {  
            a51: function () {  
                return data;  
            }  
        }  
    };  
  
    let b = {  
        a1: 'a1',  
        a2: 2,  
        a3: true,  
        a4: () => {  
            return data;  
        },  
        a5: {  
            a51: function () {  
                return data;  
            }  
        }  
    };  
  
    smartEqual(a, b);  
</code>
