# Type Guard
- type guards are techniques that narrow a variable's type within a conditional block. 
- They help TypeScript understand the specific type you're working with at runtime.

```
    function printId(id: string | number) {
        if (typeof id === "string") {
            console.log(id.toUpperCase());   // ✅ string
        } else {
            console.log(id.toFixed(2));      // ✅ number
        }
    }   

```