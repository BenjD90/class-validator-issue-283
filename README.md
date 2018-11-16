# routing-controllers with express demo

1. Install all dependencies (`class-validator@0.8.5`) :
    
    `yarn install`
  
2. Run the project:
    `yarn dev`
3. Check logs
4. Checkout branch `class-validator-0.9.1`: `git checkout class-validator-0.9.1`
5. Do it again, `yarn install`, `yarn dev` => __**The error is here**__

# Error
```json
{
    "target": {
        "body": "Message content"
    },
    "property": "body",
    "value": "Message content",
    "constraints": {
        "whitelistValidation": "property body should not exist"
    }
}
```

### Using with older versions of node

This project targets ES6. 
You can target ES5, but you'll need to use es6-shim and install its typings.
