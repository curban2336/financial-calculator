# Financial Calculator CLI

## Overview

This project provides a command-line financial calculator that processes a list of transaction amounts and outputs key financial metrics. The calculator computes the total number of transactions, total sum, average transaction value, total income (sum of positive transactions), total expenses (sum of negative transactions), and net balance.

## Prerequisites

This project requires Node.js (version 12 or higher). Please ensure that Node.js is installed on your system.

## Installation

To install the package as a development dependency, run:

npm install @chrisurban/financial-calculator --save-dev

## Usage

To run the financial calculator, use the following command with a list of transaction amounts (ignoring non-numbers):

node financialCalculator.js <transaction1> <transaction2> ...

Example:

node financialCalculator.js 100 -50 job 200 taxes -75

## License

This project is licensed under the MIT License. See the LICENSE file for additional details.
