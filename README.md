# Bridge skeleton ☠

> ⚠️  This skeleton is a recommendation. You can use any framework or library.

## Development

    $ npm install

    $ npm run dev 

## Tasks

### Debit

This endpoint is in charge of next tasks:

Synchronous steps

* Receive PENDING SEND action

* Create UPLOAD action

* Return created PENDING UPLOAD action

Asynchronous steps

* Generate IOU

* Send IOU to /sendit endpoint

* Send COMPLETED UPLOAD action to /continue endpoint

### Action

* Receive PENDING SEND action
 
* Sign SEND action

* Return COMPLETED SEND action

### Credit

Synchronous steps

* Receive COMPLETED SEND action

* Create DOWNLOAD action

* Return created PENDING UPLOAD action

Asynchronous steps

* Generate IOU

* Send IOU to /sendit endpoint

* Send COMPLETED DOWNLOAD action to /continue endpoint

## Documentation

* UPLOAD action has next structure:

```
{
    source: 'source-bank-signer-handle',
    target: 'source-user-signer-handle',
    amount: '1000.00',
    domain: 'tin'
}
```

* SEND action has next structure:

```
{
    source: 'source-user-signer-handle',
    target: 'target-user-wallet-handle', // take a look 
    amount: '1000.00',
    domain: 'tin'
}
```

> To sign SEND action is necessary to use `snapshot.target.signer.handle` as `target` value.

* DOWNLOAD action has next structure:

```
{
    source: 'target-user-signer-handle',
    target: 'target-bank-signer-handle',
    amount: '1000.00',
    domain: 'tin'
}
```

For signing process there is an example on _./src/services/crypto/example.js_ module.
