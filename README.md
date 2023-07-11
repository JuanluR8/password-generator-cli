# Generate Password CLI

This is a Node.js command-line interface (CLI) tool that generates random passwords and copies them to the clipboard.

## Prerequisites

Make sure you have Node.js installed on your system.

## Usage

To generate a password, use the following command:

```bash
generate-password [options]
```

The available options are:

- `-l, --len <number>`: Specifies the length of the password. Default is 8.
- `-s, --symbols`: Includes symbols in the password. By default, symbols are not used.
- `-n, --numbers`: Includes numbers in the password. By default, numbers are not used.

### Examples

Generate a password with a length of 12 characters:

```bash
generate-password --len 12
```

Generate a password with symbols and numbers:

```bash
generate-password --symbols --numbers
```

## Output

The generated password will be displayed in the console and copied to the clipboard.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.