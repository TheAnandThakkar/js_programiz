function hcfOrgcd(n1, n2) {
  let hcf = 0;
  for (var i = 0; i <= n1 && i <= n2; i++) {
    if (n1 % i == 0 && n2 % i == 0) {
      hcf = i;
    }
  }
  /// GCD = Greatest Common Divisor
  console.log(`Highest Common Factor (HCF) between ${n1} and ${n2} is ${hcf}`);
}

hcfOrgcd(60, 72);
