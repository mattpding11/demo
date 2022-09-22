# Bridge skeleton ☠

> ⚠️  This skeleton is a recommendation. You can use any framework or library.

## Development

    $ npm install

    $ npm run dev 

## Tasks

### Debit

This endpoint is in charge of next tasks:

Synchronous steps

1. Receive PENDING SEND action

2. Create UPLOAD action

3. Return created PENDING UPLOAD action

Asynchronous steps

4. Call /signed endpoint to sign UPLOAD action

5. Send COMPLETED UPLOAD action to /continue endpoint

Asynchronous steps (optional, nice to have - offline signing)

4. Generate IOU

5. Send IOU to /sendit endpoint

6. Send COMPLETED UPLOAD action to /continue endpoint

### Action

1. Receive PENDING SEND action
 
2. Sign SEND action

3. Return COMPLETED SEND action

### Credit

Synchronous steps

1. Receive COMPLETED SEND action

2. Create DOWNLOAD action

3. Return created PENDING UPLOAD action

Asynchronous steps

4. Call /signed endpoint to sign DOWNLOAD action

5. Send COMPLETED DOWNLOAD action to /continue endpoint 

Asynchronous steps (optional, nice to have - offline signing)

4. Generate IOU

5. Send IOU to /sendit endpoint

6. Send COMPLETED DOWNLOAD action to /continue endpoint

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
    target: 'target-user-wallet-handle', 
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

For signing process there is an example on _./src/services/crypto/example.js_ module. Use this in case you are using offline signing.


## Endpoints

### Transfer endpoint

Create transfer

* POST /v1/transfer

Accept transfer

* POST /v1/transfer/{transferId}/accept

Get transfer

* GET /v1/transfer/?transferId={transferId}

### Action endpoint

Create action

* POST /v1/action

Sign action online

* POST /v1/action/{action_id}/signed

Sign action offline

* POST /v1/action/{action_id}/sendit

Get action

* Get /v1/action/?transferId={transferId}

### Signer

Create signer

* POST /v1/signer

Get signer

* GET /v1/signer/{signer_handle}

### Wallet

Create wallet

* POST /v1/wallet

Get wallet

* GET /v1/wallet/{wallet_handle}
