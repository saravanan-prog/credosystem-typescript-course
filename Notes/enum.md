# Enum

In TypeScript, an enum is used to define a set of named constants, making code more readable and maintainable.

### Numeric Enum
```
enum Status {
  Pending,
  InProgress,
  Completed
}

let taskStatus: Status = Status.InProgress;

console.log(taskStatus); // 1

```

### String Enum

```
enum UserRole {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}

let role: UserRole = UserRole.Admin;

console.log(role); // ADMIN




```

### Using Enum in Functions

```
enum Status {
  Pending,
  Completed
}

function updateStatus(status: Status) {
  console.log(`Status: ${status}`);
}

updateStatus(Status.Completed)


```

### Enum in Switch Statement

```
enum PaymentStatus {
  Pending = "PENDING",
  Success = "SUCCESS",
  Failed = "FAILED"
}

function getMessage(status: PaymentStatus) {
  switch (status) {
    case PaymentStatus.Success:
      return "Payment successful";

    case PaymentStatus.Failed:
      return "Payment failed";

    default:
      return "Payment pending";
  }
}

```