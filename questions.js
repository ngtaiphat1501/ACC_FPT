const questions = [
    {
        "slide": 1,
        "image": "slides_images/slide_1_img_1.png",
        "answer_letter": "B",
        "answer_text": "Income Statement"
    },
    {
        "slide": 2,
        "image": "slides_images/slide_2_img_2.png",
        "answer_letter": "B",
        "answer_text": "Salaries Expense"
    },
    {
        "slide": 3,
        "image": "slides_images/slide_3_img_3.png",
        "answer_letter": "C",
        "answer_text": "Asset, liability, owner capital"
    },
    {
        "slide": 4,
        "image": "slides_images/slide_4_img_4.png",
        "answer_letter": "C",
        "answer_text": "Asset, liability, owner capital"
    },
    {
        "slide": 5,
        "image": "slides_images/slide_5_img_5.png",
        "answer_letter": "C",
        "answer_text": "It proves permanent account balances carried forward correctly"
    },
    {
        "slide": 6,
        "image": "slides_images/slide_6_img_6.png",
        "answer_letter": "C",
        "answer_text": "It proves permanent account balances carried forward correctly"
    },
    {
        "slide": 7,
        "image": "slides_images/slide_7_img_7.png",
        "answer_letter": "D",
        "answer_text": "Sales commissions"
    },
    {
        "slide": 8,
        "image": "slides_images/slide_8_img_8.png",
        "answer_letter": "B",
        "answer_text": "Sell goods for profit"
    },
    {
        "slide": 9,
        "image": "slides_images/slide_9_img_9.png",
        "answer_letter": "A",
        "answer_text": "Debit Accounts Payable $15,000; Credit Cash $14,700; Credit Inventory $300"
    },
    {
        "slide": 10,
        "image": "slides_images/slide_10_img_10.png",
        "answer_letter": "B",
        "answer_text": "Debit Purchases"
    },
    {
        "slide": 11,
        "image": "slides_images/slide_11_img_11.png",
        "answer_letter": "C",
        "answer_text": "Averaging the cost of all units available for sale"
    },
    {
        "slide": 12,
        "image": "slides_images/slide_12_img_12.png",
        "answer_letter": "B",
        "answer_text": "Decrease revenue"
    },
    {
        "slide": 13,
        "image": "slides_images/slide_13_img_13.png",
        "answer_letter": "B",
        "answer_text": "Loss due to theft, damage, or errors"
    },
    {
        "slide": 14,
        "image": "slides_images/slide_14_img_14.png",
        "answer_letter": "C",
        "answer_text": "Averaging the cost of all units available for sale"
    },
    {
        "slide": 15,
        "image": "slides_images/slide_15_img_15.png",
        "answer_letter": "A",
        "answer_text": "Added to inventory cost"
    },
    {
        "slide": 16,
        "image": "slides_images/slide_16_img_16.png",
        "answer_letter": "B",
        "answer_text": "At the end of the accounting period"
    },
    {
        "slide": 17,
        "image": "slides_images/slide_17_img_17.png",
        "answer_letter": "C",
        "answer_text": "Liabilities not expected to be paid..."
    },
    {
        "slide": 18,
        "image": "slides_images/slide_18_img_18.png",
        "answer_letter": "C",
        "answer_text": "$22,000"
    },
    {
        "slide": 19,
        "image": "slides_images/slide_19_img_19.png",
        "answer_letter": "D",
        "answer_text": "Always legally enforceable contracts."
    },
    {
        "slide": 20,
        "image": "slides_images/slide_20_img_20.png",
        "answer_letter": "C",
        "answer_text": "Liabilities not expected to be paid..."
    },
    {
        "slide": 21,
        "image": "slides_images/slide_21_img_21.png",
        "answer_letter": "A",
        "answer_text": "Issued."
    },
    {
        "slide": 22,
        "image": "slides_images/slide_22_img_22.png",
        "answer_letter": "A",
        "answer_text": "Occurs when a corporation sells its stock for more than par..."
    },
    {
        "slide": 23,
        "image": "slides_images/slide_23_img_23.png",
        "answer_letter": "C",
        "answer_text": "The right to vote in corporate elections."
    },
    {
        "slide": 24,
        "image": "slides_images/slide_24_img_24.png",
        "answer_letter": "B",
        "answer_text": "Paid-in capital and retained earnings."
    },
    {
        "slide": 25,
        "image": "slides_images/slide_25_img_25.png",
        "answer_letter": "B",
        "answer_text": "Debit Cash $6,000; Credit Preferred Stock $5,000; Credit Paid-In Capital in Excess of Par, Preferred Stock $1,000."
    },
    {
        "slide": 26,
        "image": "slides_images/slide_26_img_26.png",
        "answer_letter": "C",
        "answer_text": "Referred to as paid-in capital"
    },
    {
        "slide": 27,
        "image": "slides_images/slide_27_img_27.png",
        "answer_letter": "B",
        "answer_text": "Income Statement"
    },
    {
        "slide": 28,
        "image": "slides_images/slide_28_img_28.png",
        "answer_letter": "C",
        "answer_text": "Declaring and paying dividends"
    },
    {
        "slide": 29,
        "image": "slides_images/slide_29_img_29.png",
        "answer_letter": "A",
        "answer_text": "Bonds do not affect owner control."
    },
    {
        "slide": 30,
        "image": "slides_images/slide_30_img_30.png",
        "answer_letter": "B",
        "answer_text": "A written promise to pay..."
    },
    {
        "slide": 31,
        "image": "slides_images/slide_31_img_31.png",
        "answer_letter": "B",
        "answer_text": "The rate that borrowers are willing to pay..."
    },
    {
        "slide": 32,
        "image": "slides_images/slide_32_img_32.png",
        "answer_letter": "A",
        "answer_text": "The present value of all future cash payments provided by a bond."
    },
    {
        "slide": 33,
        "image": "slides_images/slide_33_img_33.png",
        "answer_letter": "D",
        "answer_text": "Have two people present..."
    },
    {
        "slide": 34,
        "image": "slides_images/slide_34_img_34.png",
        "answer_letter": "A",
        "answer_text": "To record cash shortages..."
    },
    {
        "slide": 35,
        "image": "slides_images/slide_35_img_35.png",
        "answer_letter": "B",
        "answer_text": "Receiving report."
    },
    {
        "slide": 36,
        "image": "slides_images/slide_36_img_36.png",
        "answer_letter": "C",
        "answer_text": "The average days of sales..."
    },
    {
        "slide": 37,
        "image": "slides_images/slide_37_img_37.png",
        "answer_letter": "C",
        "answer_text": "Add the deposit to the bank statement..."
    },
    {
        "slide": 38,
        "image": "slides_images/slide_38_img_38.png",
        "answer_letter": "B",
        "answer_text": "$1,000 x 12% x 90/360 = $30.00"
    },
    {
        "slide": 39,
        "image": "slides_images/slide_39_img_39.png",
        "answer_letter": "A",
        "answer_text": "Debit Accounts Receivable..."
    },
    {
        "slide": 40,
        "image": "slides_images/slide_40_img_40.png",
        "answer_letter": "A",
        "answer_text": "Write off an uncollectible account receivable"
    },
    {
        "slide": 41,
        "image": "slides_images/slide_41_img_41.png",
        "answer_letter": "B",
        "answer_text": "Debit Account Receivable..."
    },
    {
        "slide": 42,
        "image": "slides_images/slide_42_img_42.png",
        "answer_letter": "B",
        "answer_text": "To maintain individual accounts..."
    },
    {
        "slide": 43,
        "image": "slides_images/slide_43_img_43.png",
        "answer_letter": "A",
        "answer_text": "Based on their relative appraised values"
    },
    {
        "slide": 44,
        "image": "slides_images/slide_44_img_44.png",
        "answer_letter": "A",
        "answer_text": "Plant assets can be disposed of..."
    },
    {
        "slide": 45,
        "image": "slides_images/slide_45_img_45.png",
        "answer_letter": "A",
        "answer_text": "Asset"
    },
    {
        "slide": 46,
        "image": "slides_images/slide_46_img_46.png",
        "answer_letter": "B",
        "answer_text": "Owned by the seller"
    },
    {
        "slide": 47,
        "image": "slides_images/slide_47_img_47.png",
        "answer_letter": "C",
        "answer_text": "The person that borrows money..."
    },
    {
        "slide": 48,
        "image": "slides_images/slide_48_img_48.png",
        "answer_letter": "C",
        "answer_text": "Asset, liability, owner capital"
    },
    {
        "slide": 49,
        "image": "slides_images/slide_49_img_49.png",
        "answer_letter": "B",
        "answer_text": "Changes in retained earnings over a period"
    },
    {
        "slide": 50,
        "image": "slides_images/slide_50_img_50.png",
        "answer_letter": "D",
        "answer_text": "A General journal"
    },
    {
        "slide": 51,
        "image": "slides_images/slide_51_img_51.png",
        "answer_letter": "C",
        "answer_text": "Service Revenue"
    },
    {
        "slide": 52,
        "image": "slides_images/slide_52_img_52.png",
        "answer_letter": "B",
        "answer_text": "Changes in retained earnings over a period"
    },
    {
        "slide": 53,
        "image": "slides_images/slide_53_img_53.png",
        "answer_letter": "C",
        "answer_text": "Asset, liability, owner capital"
    },
    {
        "slide": 54,
        "image": "slides_images/slide_54_img_54.png",
        "answer_letter": "C",
        "answer_text": "It proves permanent account balances carried forward correctly"
    },
    {
        "slide": 55,
        "image": "slides_images/slide_55_img_55.png",
        "answer_letter": "C",
        "answer_text": "It proves permanent account balances carried forward correctly"
    },
    {
        "slide": 56,
        "image": "slides_images/slide_56_img_56.png",
        "answer_letter": "D",
        "answer_text": "Sales commissions"
    },
    {
        "slide": 57,
        "image": "slides_images/slide_57_img_57.png",
        "answer_letter": "B",
        "answer_text": "Sell goods for profit"
    },
    {
        "slide": 58,
        "image": "slides_images/slide_58_img_58.png",
        "answer_letter": "B",
        "answer_text": "Debit Purchases"
    },
    {
        "slide": 59,
        "image": "slides_images/slide_59_img_59.png",
        "answer_letter": "B",
        "answer_text": "To encourage prompt payment"
    },
    {
        "slide": 60,
        "image": "slides_images/slide_60_img_60.png",
        "answer_letter": "A",
        "answer_text": "Debit Accounts Receivable $3,000, Credit Sales $3,000; Debit Cost of Goods Sold $2,000, Credit Inventory $2,000"
    },
    {
        "slide": 61,
        "image": "slides_images/slide_61_img_61.png",
        "answer_letter": "C",
        "answer_text": "Averaging the cost of all units available for sale"
    },
    {
        "slide": 62,
        "image": "slides_images/slide_62_img_62.png",
        "answer_letter": "A",
        "answer_text": "Oldest inventory costs"
    },
    {
        "slide": 63,
        "image": "slides_images/slide_63_img_63.png",
        "answer_letter": "B",
        "answer_text": "Computed at period-end"
    },
    {
        "slide": 64,
        "image": "slides_images/slide_64_img_64.png",
        "answer_letter": "B",
        "answer_text": "Estimated selling price minus..."
    },
    {
        "slide": 65,
        "image": "slides_images/slide_65_img_65.png",
        "answer_letter": "C",
        "answer_text": "Both income statement and balance sheet"
    },
    {
        "slide": 66,
        "image": "slides_images/slide_66_img_66.png",
        "answer_letter": "C",
        "answer_text": "$100"
    },
    {
        "slide": 67,
        "image": "slides_images/slide_67_img_67.png",
        "answer_letter": "C",
        "answer_text": "$22,000"
    },
    {
        "slide": 68,
        "image": "slides_images/slide_68_img_68.png",
        "answer_letter": "C",
        "answer_text": "Classify it as unearned revenue, a liability"
    },
    {
        "slide": 69,
        "image": "slides_images/slide_69_img_69.png",
        "answer_letter": "D",
        "answer_text": "Always legally enforceable contracts."
    },
    {
        "slide": 70,
        "image": "slides_images/slide_70_img_70.png",
        "answer_letter": "B",
        "answer_text": "Income Statement"
    },
    {
        "slide": 71,
        "image": "slides_images/slide_71_img_71.png",
        "answer_letter": "C",
        "answer_text": "Separate legal entity."
    },
    {
        "slide": 72,
        "image": "slides_images/slide_72_img_72.png",
        "answer_letter": "B",
        "answer_text": "A share of stock."
    },
    {
        "slide": 73,
        "image": "slides_images/slide_73_img_73.png",
        "answer_letter": "A",
        "answer_text": "Issued."
    },
    {
        "slide": 74,
        "image": "slides_images/slide_74_img_74.png",
        "answer_letter": "B",
        "answer_text": "They accumulate..."
    },
    {
        "slide": 75,
        "image": "slides_images/slide_75_img_75.png",
        "answer_letter": "B",
        "answer_text": "Debit Cash $6,000; Credit Preferred Stock $5,000; Credit Paid-In Capital in Excess of Par, Preferred Stock $1,000."
    },
    {
        "slide": 76,
        "image": "slides_images/slide_76_img_76.png",
        "answer_letter": "D",
        "answer_text": "$688,750"
    },
    {
        "slide": 77,
        "image": "slides_images/slide_77_img_77.png",
        "answer_letter": "B",
        "answer_text": "Changes in retained earnings over a period"
    },
    {
        "slide": 78,
        "image": "slides_images/slide_78_img_78.png",
        "answer_letter": "B",
        "answer_text": "Bonds can decrease the company's return on equity if the company has lower income."
    },
    {
        "slide": 79,
        "image": "slides_images/slide_79_img_79.png",
        "answer_letter": "B",
        "answer_text": "Bond indenture."
    },
    {
        "slide": 80,
        "image": "slides_images/slide_80_img_80.png",
        "answer_letter": "A",
        "answer_text": "Debit Bond Interest Expense $24,000; credit Cash $24,000."
    },
    {
        "slide": 81,
        "image": "slides_images/slide_81_img_81.png",
        "answer_letter": "A",
        "answer_text": "Occurs when a company issues bonds with a contract rate less than the market rate."
    },
    {
        "slide": 82,
        "image": "slides_images/slide_82_img_82.png",
        "answer_letter": "B",
        "answer_text": "Plan cash receipts to meet payments when due"
    },
    {
        "slide": 83,
        "image": "slides_images/slide_83_img_83.png",
        "answer_letter": "C",
        "answer_text": "Short-term investments..."
    },
    {
        "slide": 84,
        "image": "slides_images/slide_84_img_84.png",
        "answer_letter": "B",
        "answer_text": "The journal entry for petty cash reimbursement..."
    },
    {
        "slide": 85,
        "image": "slides_images/slide_85_img_85.png",
        "answer_letter": "A",
        "answer_text": "A debit to Accounts Payable for $50."
    },
    {
        "slide": 86,
        "image": "slides_images/slide_86_img_86.png",
        "answer_letter": "C",
        "answer_text": "Deducted from the bank balance of cash."
    },
    {
        "slide": 87,
        "image": "slides_images/slide_87_img_87.png",
        "answer_letter": "C",
        "answer_text": "Interest Expense"
    },
    {
        "slide": 88,
        "image": "slides_images/slide_88_img_88.png",
        "answer_letter": "C",
        "answer_text": "Cash collections are delayed."
    },
    {
        "slide": 89,
        "image": "slides_images/slide_89_img_89.png",
        "answer_letter": "B",
        "answer_text": "Debit Cash for the full amount..."
    },
    {
        "slide": 90,
        "image": "slides_images/slide_90_img_90.png",
        "answer_letter": "A",
        "answer_text": "Principal x Rate x Time"
    },
    {
        "slide": 91,
        "image": "slides_images/slide_91_img_91.png",
        "answer_letter": "B",
        "answer_text": "The company debits Accounts Receivable..."
    },
    {
        "slide": 92,
        "image": "slides_images/slide_92_img_92.png",
        "answer_letter": "B",
        "answer_text": "Tangible assets are assets held for operating activity of the company"
    },
    {
        "slide": 93,
        "image": "slides_images/slide_93_img_93.png",
        "answer_letter": "B",
        "answer_text": "Extraction costs"
    },
    {
        "slide": 94,
        "image": "slides_images/slide_94_img_94.png",
        "answer_letter": "C",
        "answer_text": "Revenue expenditures are additional costs..."
    },
    {
        "slide": 95,
        "image": "slides_images/slide_95_img_95.png",
        "answer_letter": "A",
        "answer_text": "Asset"
    },
    {
        "slide": 96,
        "image": "slides_images/slide_96_img_96.png",
        "answer_letter": "A",
        "answer_text": "Owned by the buyer"
    },
    {
        "slide": 97,
        "image": "slides_images/slide_97_img_97.png",
        "answer_letter": "A",
        "answer_text": "Debit to Notes Receivable for $15,000."
    },
    {
        "slide": 98,
        "image": "slides_images/slide_98_img_98.png",
        "answer_letter": "A",
        "answer_text": "Closing revenue..."
    },
    {
        "slide": 99,
        "image": "slides_images/slide_99_img_99.png",
        "answer_letter": "A",
        "answer_text": "Sales revenue - Sales discounts and returns"
    },
    {
        "slide": 100,
        "image": "slides_images/slide_100_img_100.png",
        "answer_letter": "B",
        "answer_text": "$1,275"
    },
    {
        "slide": 101,
        "image": "slides_images/slide_101_img_101.png",
        "answer_letter": "A",
        "answer_text": "Going-concern principle."
    },
    {
        "slide": 102,
        "image": "slides_images/slide_102_img_102.png",
        "answer_letter": "B",
        "answer_text": "Credit cash and debit loan"
    },
    {
        "slide": 103,
        "image": "slides_images/slide_103_img_103.png",
        "answer_letter": "B",
        "answer_text": "Debit withdrawal..."
    },
    {
        "slide": 104,
        "image": "slides_images/slide_104_img_104.png",
        "answer_letter": "A",
        "answer_text": "Debit equipment and credit loan"
    },
    {
        "slide": 105,
        "image": "slides_images/slide_105_img_105.png",
        "answer_letter": "B",
        "answer_text": "Debit Cash $10,000, Debit Equipment $15,000, Credit Capital $25,000."
    },
    {
        "slide": 106,
        "image": "slides_images/slide_106_img_106.png",
        "answer_letter": "B",
        "answer_text": "A $4,000 debit balance."
    },
    {
        "slide": 107,
        "image": "slides_images/slide_107_img_107.png",
        "answer_letter": "A",
        "answer_text": "Option A"
    },
    {
        "slide": 108,
        "image": "slides_images/slide_108_img_108.png",
        "answer_letter": "C",
        "answer_text": "Revenue and Liabilities"
    },
    {
        "slide": 109,
        "image": "slides_images/slide_109_img_109.png",
        "answer_letter": "C",
        "answer_text": "Current Liability"
    },
    {
        "slide": 110,
        "image": "slides_images/slide_110_img_110.png",
        "answer_letter": "C",
        "answer_text": "Merchandise available for sale includes Beginning inventory and Net cost of purchases."
    },
    {
        "slide": 111,
        "image": "slides_images/slide_111_img_111.png",
        "answer_letter": "A",
        "answer_text": "$90,000"
    },
    {
        "slide": 112,
        "image": "slides_images/slide_112_img_112.png",
        "answer_letter": "A",
        "answer_text": "Buying inventory by cash $8,000"
    },
    {
        "slide": 113,
        "image": "slides_images/slide_113_img_113.png",
        "answer_letter": "D",
        "answer_text": "Cash paid to suppliers"
    },
    {
        "slide": 114,
        "image": "slides_images/slide_114_img_114.png",
        "answer_letter": "C",
        "answer_text": "Purchase of land."
    },
    {
        "slide": 115,
        "image": "slides_images/slide_115_img_115.png",
        "answer_letter": "A",
        "answer_text": "Borrowing."
    },
    {
        "slide": 116,
        "image": "slides_images/slide_116_img_116.png",
        "answer_letter": "C",
        "answer_text": "Purchase of land."
    },
    {
        "slide": 117,
        "image": "slides_images/slide_117_img_117.png",
        "answer_letter": "D",
        "answer_text": "$12,160."
    },
    {
        "slide": 118,
        "image": "slides_images/slide_118_img_118.png",
        "answer_letter": "A",
        "answer_text": "Debit allowance for doubtful accounts 3000, Credit account receivable"
    },
    {
        "slide": 119,
        "image": "slides_images/slide_119_img_119.png",
        "answer_letter": "A",
        "answer_text": "Write off an uncollectible account receivable"
    },
    {
        "slide": 120,
        "image": "slides_images/slide_120_img_120.png",
        "answer_letter": "C",
        "answer_text": "$34,000"
    },
    {
        "slide": 121,
        "image": "slides_images/slide_121_img_121.png",
        "answer_letter": "D",
        "answer_text": "$3,900 per year."
    },
    {
        "slide": 122,
        "image": "slides_images/slide_122_img_122.png",
        "answer_letter": "B",
        "answer_text": "Tangible assets are assets held for operating activity of the company"
    },
    {
        "slide": 123,
        "image": "slides_images/slide_123_img_123.png",
        "answer_letter": "C",
        "answer_text": "Inventory"
    },
    {
        "slide": 124,
        "image": "slides_images/slide_124_img_124.png",
        "answer_letter": "E",
        "answer_text": "Contingent assets"
    },
    {
        "slide": 125,
        "image": "slides_images/slide_125_img_125.png",
        "answer_letter": "B",
        "answer_text": "Changes in retained earnings over a period"
    },
    {
        "slide": 126,
        "image": "slides_images/slide_126_img_126.png",
        "answer_letter": "A",
        "answer_text": "Increase by $40,000"
    },
    {
        "slide": 127,
        "image": "slides_images/slide_127_img_127.png",
        "answer_letter": "A",
        "answer_text": "Real-time inventory tracking"
    },
    {
        "slide": 128,
        "image": "slides_images/slide_128_img_128.png",
        "answer_letter": "B",
        "answer_text": "Reduce revenue received"
    },
    {
        "slide": 129,
        "image": "slides_images/slide_129_img_129.png",
        "answer_letter": "C",
        "answer_text": "$71"
    },
    {
        "slide": 130,
        "image": "slides_images/slide_130_img_130.png",
        "answer_letter": "A",
        "answer_text": "Net income is overstated"
    },
    {
        "slide": 131,
        "image": "slides_images/slide_131_img_131.png",
        "answer_letter": "B",
        "answer_text": "Debit Accounts Payable $25,000; credit Notes Payable $25,000"
    },
    {
        "slide": 132,
        "image": "slides_images/slide_132_img_132.png",
        "answer_letter": "C",
        "answer_text": "Obligations that are measurable..."
    },
    {
        "slide": 133,
        "image": "slides_images/slide_133_img_133.png",
        "answer_letter": "B",
        "answer_text": "Are Unearned revenues."
    },
    {
        "slide": 134,
        "image": "slides_images/slide_134_img_134.png",
        "answer_letter": "A",
        "answer_text": "$150"
    },
    {
        "slide": 135,
        "image": "slides_images/slide_135_img_135.png",
        "answer_letter": "A",
        "answer_text": "Option A"
    },
    {
        "slide": 136,
        "image": "slides_images/slide_136_img_136.png",
        "answer_letter": "C",
        "answer_text": "Obligations that are measurable..."
    },
    {
        "slide": 137,
        "image": "slides_images/slide_137_img_137.png",
        "answer_letter": "B",
        "answer_text": "Limited liability of stockholders."
    },
    {
        "slide": 138,
        "image": "slides_images/slide_138_img_138.png",
        "answer_letter": "B",
        "answer_text": "To maintain a list of stockholders and handle dividend payments."
    },
    {
        "slide": 139,
        "image": "slides_images/slide_139_img_139.png",
        "answer_letter": "D",
        "answer_text": "$60"
    },
    {
        "slide": 140,
        "image": "slides_images/slide_140_img_140.png",
        "answer_letter": "C",
        "answer_text": "Assets increase and Equity increases"
    },
    {
        "slide": 141,
        "image": "slides_images/slide_141_img_141.png",
        "answer_letter": "B",
        "answer_text": "Debit Cash $360,000, Credit Common Stock $300,000; Credit Paid-in Capital in Excess of Par Value $60,000."
    },
    {
        "slide": 142,
        "image": "slides_images/slide_142_img_142.png",
        "answer_letter": "B",
        "answer_text": "Debit Common Dividend Payable $12,000; credit Cash $12,000."
    },
    {
        "slide": 143,
        "image": "slides_images/slide_143_img_143.png",
        "answer_letter": "B",
        "answer_text": "Declaration of cash dividends."
    },
    {
        "slide": 144,
        "image": "slides_images/slide_144_img_144.png",
        "answer_letter": "A",
        "answer_text": "Bonds do not affect owner control."
    },
    {
        "slide": 145,
        "image": "slides_images/slide_145_img_145.png",
        "answer_letter": "C",
        "answer_text": "Higher than the market rate."
    },
    {
        "slide": 146,
        "image": "slides_images/slide_146_img_146.png",
        "answer_letter": "B",
        "answer_text": "Do not explain the changes in cash during the period"
    },
    {
        "slide": 147,
        "image": "slides_images/slide_147_img_147.png",
        "answer_letter": "D",
        "answer_text": "Provides a listing of the balance of each ledger account"
    },
    {
        "slide": 148,
        "image": "slides_images/slide_148_img_148.png",
        "answer_letter": "B",
        "answer_text": "A contra-asset account such as Accumulated Depreciation will likely have credit balance"
    },
    {
        "slide": 149,
        "image": "slides_images/slide_149_img_149.png",
        "answer_letter": "E",
        "answer_text": "All of these."
    },
    {
        "slide": 150,
        "image": "slides_images/slide_150_img_150.png",
        "answer_letter": "B",
        "answer_text": "Accrual basis"
    },
    {
        "slide": 151,
        "image": "slides_images/slide_151_img_151.png",
        "answer_letter": "D",
        "answer_text": "Unearned revenue"
    },
    {
        "slide": 152,
        "image": "slides_images/slide_152_img_152.png",
        "answer_letter": "E",
        "answer_text": "All of these."
    },
    {
        "slide": 153,
        "image": "slides_images/slide_153_img_153.png",
        "answer_letter": "B",
        "answer_text": "on a later date"
    },
    {
        "slide": 154,
        "image": "slides_images/slide_154_img_154.png",
        "answer_letter": "D",
        "answer_text": "T-account"
    },
    {
        "slide": 155,
        "image": "slides_images/slide_155_img_155.png",
        "answer_letter": "A",
        "answer_text": "$2,500"
    },
    {
        "slide": 156,
        "image": "slides_images/slide_156_img_156.png",
        "answer_letter": "D",
        "answer_text": "None of these"
    },
    {
        "slide": 157,
        "image": "slides_images/slide_157_img_157.png",
        "answer_letter": "A",
        "answer_text": "Generally when an expense or withdraw is involved in a transaction, it will be debit"
    },
    {
        "slide": 158,
        "image": "slides_images/slide_158_img_158.png",
        "answer_letter": "A",
        "answer_text": "Option A"
    },
    {
        "slide": 159,
        "image": "slides_images/slide_159_img_159.png",
        "answer_letter": "B",
        "answer_text": "Office supplies"
    },
    {
        "slide": 160,
        "image": "slides_images/slide_160_img_160.png",
        "answer_letter": "A",
        "answer_text": "Debit Revenue: $10,000 Credit Income summary: $10,000"
    },
    {
        "slide": 161,
        "image": "slides_images/slide_161_img_161.png",
        "answer_letter": "E",
        "answer_text": "Current asset"
    },
    {
        "slide": 162,
        "image": "slides_images/slide_162_img_162.png",
        "answer_letter": "D",
        "answer_text": "Gross profit"
    },
    {
        "slide": 163,
        "image": "slides_images/slide_163_img_163.png",
        "answer_letter": "B",
        "answer_text": "Trade discounts"
    },
    {
        "slide": 164,
        "image": "slides_images/slide_164_img_164.png",
        "answer_letter": "A",
        "answer_text": "$690"
    },
    {
        "slide": 165,
        "image": "slides_images/slide_165_img_165.png",
        "answer_letter": "A",
        "answer_text": "An overstatement of assets and equity on the balance sheet."
    },
    {
        "slide": 166,
        "image": "slides_images/slide_166_img_166.png",
        "answer_letter": "A",
        "answer_text": "$40,500 increase."
    },
    {
        "slide": 167,
        "image": "slides_images/slide_167_img_167.png",
        "answer_letter": "D",
        "answer_text": "Added to accounting book balance"
    },
    {
        "slide": 168,
        "image": "slides_images/slide_168_img_168.png",
        "answer_letter": "C",
        "answer_text": "Bad debts"
    },
    {
        "slide": 169,
        "image": "slides_images/slide_169_img_169.png",
        "answer_letter": "C",
        "answer_text": "Dr. Uncollectible Accounts Expense 300, Cr. Accounts Receivable 300"
    },
    {
        "slide": 170,
        "image": "slides_images/slide_170_img_170.png",
        "answer_letter": "B",
        "answer_text": "$47,000"
    },
    {
        "slide": 171,
        "image": "slides_images/slide_171_img_171.png",
        "answer_letter": "B",
        "answer_text": "Tangible assets are assets held for operating activity of the company"
    },
    {
        "slide": 172,
        "image": "slides_images/slide_172_img_172.png",
        "answer_letter": "D",
        "answer_text": "Assets need to depreciate include vehicle, machine, buildings"
    },
    {
        "slide": 173,
        "image": "slides_images/slide_173_img_173.png",
        "answer_letter": "C",
        "answer_text": "$8,000"
    },
    {
        "slide": 174,
        "image": "slides_images/slide_174_img_174.png",
        "answer_letter": "A",
        "answer_text": "Total asset cost minus depreciation expense"
    },
    {
        "slide": 175,
        "image": "slides_images/slide_175_img_175.png",
        "answer_letter": "D",
        "answer_text": "Current liabilities include accounts payable, unearned revenues, and salaries payable."
    },
    {
        "slide": 176,
        "image": "slides_images/slide_176_img_176.png",
        "answer_letter": "A",
        "answer_text": "Debit to Notes Receivable for $15,000."
    },
    {
        "slide": 177,
        "image": "slides_images/slide_177_img_177.png",
        "answer_letter": "D",
        "answer_text": "Owner's Capital account"
    },
    {
        "slide": 178,
        "image": "slides_images/slide_178_img_178.png",
        "answer_letter": "D",
        "answer_text": "$12,000"
    },
    {
        "slide": 179,
        "image": "slides_images/slide_179_img_179.png",
        "answer_letter": "C",
        "answer_text": "$9,800"
    },
    {
        "slide": 180,
        "image": "slides_images/slide_180_img_180.png",
        "answer_letter": "D",
        "answer_text": "$32"
    },
    {
        "slide": 181,
        "image": "slides_images/slide_181_img_181.png",
        "answer_letter": "E",
        "answer_text": "$1,114"
    },
    {
        "slide": 182,
        "image": "slides_images/slide_182_img_182.png",
        "answer_letter": "C",
        "answer_text": "Debit Notes Payable $10,000; Debit Interest Expense $100; Credit Cash $10,100."
    },
    {
        "slide": 183,
        "image": "slides_images/slide_183_img_183.png",
        "answer_letter": "B",
        "answer_text": "Can be issued in return for money borrowed from a bank."
    },
    {
        "slide": 184,
        "image": "slides_images/slide_184_img_184.png",
        "answer_letter": "C",
        "answer_text": "Debit Cash, credit Unearned Revenue."
    },
    {
        "slide": 185,
        "image": "slides_images/slide_185_img_185.png",
        "answer_letter": "C",
        "answer_text": "Current liability."
    },
    {
        "slide": 186,
        "image": "slides_images/slide_186_img_186.png",
        "answer_letter": "A",
        "answer_text": "Interest."
    },
    {
        "slide": 187,
        "image": "slides_images/slide_187_img_187.png",
        "answer_letter": "A",
        "answer_text": "Current liabilities."
    },
    {
        "slide": 188,
        "image": "slides_images/slide_188_img_188.png",
        "answer_letter": "D",
        "answer_text": "No-Par Value Stock"
    },
    {
        "slide": 189,
        "image": "slides_images/slide_189_img_189.png",
        "answer_letter": "A",
        "answer_text": "Issued."
    },
    {
        "slide": 190,
        "image": "slides_images/slide_190_img_190.png",
        "answer_letter": "C",
        "answer_text": "Paid-in capital in excess of par value is reported as part of equity."
    },
    {
        "slide": 191,
        "image": "slides_images/slide_191_img_191.png",
        "answer_letter": "C",
        "answer_text": "It is not assigned a value per share by the charter."
    },
    {
        "slide": 192,
        "image": "slides_images/slide_192_img_192.png",
        "answer_letter": "C",
        "answer_text": "A $1,300 credit to Paid-in Capital in Excess of Par Value, Common Stock."
    },
    {
        "slide": 193,
        "image": "slides_images/slide_193_img_193.png",
        "answer_letter": "B",
        "answer_text": "Paid-in capital and retained earnings."
    },
    {
        "slide": 194,
        "image": "slides_images/slide_194_img_194.png",
        "answer_letter": "E",
        "answer_text": "An amount assigned to no-par stock by the corporation's board of directors."
    },
    {
        "slide": 195,
        "image": "slides_images/slide_195_img_195.png",
        "answer_letter": "E",
        "answer_text": "Accounted for in current and future periods."
    },
    {
        "slide": 196,
        "image": "slides_images/slide_196_img_196.png",
        "answer_letter": "A",
        "answer_text": "Interest on bonds is tax deductible."
    },
    {
        "slide": 197,
        "image": "slides_images/slide_197_img_197.png",
        "answer_letter": "C",
        "answer_text": "Contract rate"
    },
    {
        "slide": 198,
        "image": "slides_images/slide_198_img_198.png",
        "answer_letter": "D",
        "answer_text": "$43,300"
    },
    {
        "slide": 199,
        "image": "slides_images/slide_199_img_199.png",
        "answer_letter": "C",
        "answer_text": "Asset, liability, owner capital"
    },
    {
        "slide": 200,
        "image": "slides_images/slide_200_img_200.png",
        "answer_letter": "A",
        "answer_text": "A loss"
    },
    {
        "slide": 201,
        "image": "slides_images/slide_201_img_201.png",
        "answer_letter": "D",
        "answer_text": "Expenses."
    },
    {
        "slide": 202,
        "image": "slides_images/slide_202_img_202.png",
        "answer_letter": "B",
        "answer_text": "Office supplies"
    },
    {
        "slide": 203,
        "image": "slides_images/slide_203_img_203.png",
        "answer_letter": "D",
        "answer_text": "Is the excess of revenues over expenses."
    },
    {
        "slide": 204,
        "image": "slides_images/slide_204_img_204.png",
        "answer_letter": "D",
        "answer_text": "Debit Van $35,000, Credit Cash $5,000, Credit Account payable $30,000"
    },
    {
        "slide": 205,
        "image": "slides_images/slide_205_img_205.png",
        "answer_letter": "D",
        "answer_text": "Debit Withdrawals and credit Cash."
    },
    {
        "slide": 206,
        "image": "slides_images/slide_206_img_206.png",
        "answer_letter": "C",
        "answer_text": "$2,900."
    },
    {
        "slide": 207,
        "image": "slides_images/slide_207_img_207.png",
        "answer_letter": "D",
        "answer_text": "None of these"
    },
    {
        "slide": 208,
        "image": "slides_images/slide_208_img_208.png",
        "answer_letter": "B",
        "answer_text": "$4,000"
    },
    {
        "slide": 209,
        "image": "slides_images/slide_209_img_209.png",
        "answer_letter": "D",
        "answer_text": "Account payable."
    },
    {
        "slide": 210,
        "image": "slides_images/slide_210_img_210.png",
        "answer_letter": "D",
        "answer_text": "Debit Dina Kader, Capital and credit Dina Kader, Withdrawals for $35,000."
    },
    {
        "slide": 211,
        "image": "slides_images/slide_211_img_211.png",
        "answer_letter": "B",
        "answer_text": "Non - current asset"
    },
    {
        "slide": 212,
        "image": "slides_images/slide_212_img_212.png",
        "answer_letter": "D",
        "answer_text": "puts()"
    },
    {
        "slide": 213,
        "image": "slides_images/slide_213_img_213.png",
        "answer_letter": "B",
        "answer_text": "Trade discounts"
    },
    {
        "slide": 214,
        "image": "slides_images/slide_214_img_214.png",
        "answer_letter": "A",
        "answer_text": "FIFO"
    },
    {
        "slide": 215,
        "image": "slides_images/slide_215_img_215.png",
        "answer_letter": "E",
        "answer_text": "All of these."
    },
    {
        "slide": 216,
        "image": "slides_images/slide_216_img_216.png",
        "answer_letter": "C",
        "answer_text": "The Android system does not deliver the broadcast to the app"
    },
    {
        "slide": 217,
        "image": "slides_images/slide_217_img_217.png",
        "answer_letter": "B",
        "answer_text": "Involve using resources to research, develop, purchase, produce, distribute and market products and services."
    },
    {
        "slide": 218,
        "image": "slides_images/slide_218_img_218.png",
        "answer_letter": "C",
        "answer_text": "Purchase of land."
    },
    {
        "slide": 219,
        "image": "slides_images/slide_219_img_219.png",
        "answer_letter": "A",
        "answer_text": "$40,500 increase."
    },
    {
        "slide": 220,
        "image": "slides_images/slide_220_img_220.png",
        "answer_letter": "C",
        "answer_text": "Dr. Bad debts Expense 21,000 Cr. Allow. for Uncollectible Accounts 21,000"
    },
    {
        "slide": 221,
        "image": "slides_images/slide_221_img_221.png",
        "answer_letter": "B",
        "answer_text": "$47,000"
    },
    {
        "slide": 222,
        "image": "slides_images/slide_222_img_222.png",
        "answer_letter": "A",
        "answer_text": "Write off an uncollectible account receivable"
    },
    {
        "slide": 223,
        "image": "slides_images/slide_223_img_223.png",
        "answer_letter": "D",
        "answer_text": "$3,900 per year."
    },
    {
        "slide": 224,
        "image": "slides_images/slide_224_img_224.png",
        "answer_letter": "B",
        "answer_text": "Tangible assets are assets held for operating activity of the company"
    },
    {
        "slide": 225,
        "image": "slides_images/slide_225_img_225.png",
        "answer_letter": "C",
        "answer_text": "Salvage value"
    },
    {
        "slide": 226,
        "image": "slides_images/slide_226_img_226.png",
        "answer_letter": "C",
        "answer_text": "$34,000"
    },
    {
        "slide": 227,
        "image": "slides_images/slide_227_img_227.png",
        "answer_letter": "A",
        "answer_text": "Note payable"
    },
    {
        "slide": 228,
        "image": "slides_images/slide_228_img_228.png",
        "answer_letter": "B",
        "answer_text": "625"
    },
    {
        "slide": 229,
        "image": "slides_images/slide_229_img_229.png",
        "answer_letter": "A",
        "answer_text": "Debit Income Summary $50,000; Credit Rent Expense $20,000, Credit Salaries Expense $30,000"
    },
    {
        "slide": 230,
        "image": "slides_images/slide_230_img_230.png",
        "answer_letter": "E",
        "answer_text": "$65,000"
    },
    {
        "slide": 231,
        "image": "slides_images/slide_231_img_231.png",
        "answer_letter": "C",
        "answer_text": "$9,800"
    },
    {
        "slide": 232,
        "image": "slides_images/slide_232_img_232.png",
        "answer_letter": "A",
        "answer_text": "Replacement cost"
    },
    {
        "slide": 233,
        "image": "slides_images/slide_233_img_233.png",
        "answer_letter": "C",
        "answer_text": "$1,840"
    },
    {
        "slide": 234,
        "image": "slides_images/slide_234_img_234.png",
        "answer_letter": "E",
        "answer_text": "Debit Notes Payable $50,000; debit Interest Expense $1,000; credit Cash $51,000"
    },
    {
        "slide": 235,
        "image": "slides_images/slide_235_img_235.png",
        "answer_letter": "B",
        "answer_text": "Debit Accounts Payable $25,000; credit Notes Payable $25,000"
    },
    {
        "slide": 236,
        "image": "slides_images/slide_236_img_236.png",
        "answer_letter": "B",
        "answer_text": "Are Unearned revenues."
    },
    {
        "slide": 237,
        "image": "slides_images/slide_237_img_237.png",
        "answer_letter": "A",
        "answer_text": "Current liabilities."
    },
    {
        "slide": 238,
        "image": "slides_images/slide_238_img_238.png",
        "answer_letter": "E",
        "answer_text": "Stockholders' Equity"
    },
    {
        "slide": 239,
        "image": "slides_images/slide_239_img_239.png",
        "answer_letter": "C",
        "answer_text": "It is not assigned a value per share by the charter."
    },
    {
        "slide": 240,
        "image": "slides_images/slide_240_img_240.png",
        "answer_letter": "D",
        "answer_text": "A credit to Common Stock for $14,000."
    },
    {
        "slide": 241,
        "image": "slides_images/slide_241_img_241.png",
        "answer_letter": "D",
        "answer_text": "A credit to Paid-in Capital in Excess of Par Value, Common Stock for $70,000."
    },
    {
        "slide": 242,
        "image": "slides_images/slide_242_img_242.png",
        "answer_letter": "B",
        "answer_text": "$5,000"
    },
    {
        "slide": 243,
        "image": "slides_images/slide_243_img_243.png",
        "answer_letter": "E",
        "answer_text": "Accounted for in current and future periods."
    },
    {
        "slide": 244,
        "image": "slides_images/slide_244_img_244.png",
        "answer_letter": "B",
        "answer_text": "Bonds can decrease the company's return on equity if the company has lower income."
    },
    {
        "slide": 245,
        "image": "slides_images/slide_245_img_245.png",
        "answer_letter": "C",
        "answer_text": "$1,360"
    },
    {
        "slide": 246,
        "image": "slides_images/slide_246_img_246.png",
        "answer_letter": "C",
        "answer_text": "Account payable"
    },
    {
        "slide": 247,
        "image": "slides_images/slide_247_img_247.png",
        "answer_letter": "B",
        "answer_text": "2"
    },
    {
        "slide": 248,
        "image": "slides_images/slide_248_img_248.png",
        "answer_letter": "C",
        "answer_text": "Liabilities not expected to be paid..."
    },
    {
        "slide": 249,
        "image": "slides_images/slide_249_img_249.png",
        "answer_letter": "B",
        "answer_text": "Tangible assets are assets held for operating activity of the company"
    },
    {
        "slide": 250,
        "image": "slides_images/slide_250_img_250.png",
        "answer_letter": "E",
        "answer_text": "Assets increase by $75,000 and liabilities increase by $75,000."
    },
    {
        "slide": 251,
        "image": "slides_images/slide_251_img_251.png",
        "answer_letter": "A",
        "answer_text": "Going-concern principle."
    },
    {
        "slide": 252,
        "image": "slides_images/slide_252_img_252.png",
        "answer_letter": "B",
        "answer_text": "$1,275"
    },
    {
        "slide": 253,
        "image": "slides_images/slide_253_img_253.png",
        "answer_letter": "E",
        "answer_text": "All of these."
    },
    {
        "slide": 254,
        "image": "slides_images/slide_254_img_254.png",
        "answer_letter": "B",
        "answer_text": "Unearned future wages to be paid to employees should be recorded as liabilities."
    },
    {
        "slide": 255,
        "image": "slides_images/slide_255_img_255.png",
        "answer_letter": "D",
        "answer_text": "Owner's Capital account"
    },
    {
        "slide": 256,
        "image": "slides_images/slide_256_img_256.png",
        "answer_letter": "D",
        "answer_text": "Assets need to depreciate include vehicle, machine, buildings"
    },
    {
        "slide": 257,
        "image": "slides_images/slide_257_img_257.png",
        "answer_letter": "A",
        "answer_text": "$2,687.50"
    },
    {
        "slide": 258,
        "image": "slides_images/slide_258_img_258.png",
        "answer_letter": "C",
        "answer_text": "$8,000"
    },
    {
        "slide": 259,
        "image": "slides_images/slide_259_img_259.png",
        "answer_letter": "E",
        "answer_text": "$4,375"
    },
    {
        "slide": 260,
        "image": "slides_images/slide_260_img_260.png",
        "answer_letter": "C",
        "answer_text": "Revenue and expense accounts are temporary accounts and should be closed at the end of the accounting period"
    },
    {
        "slide": 261,
        "image": "slides_images/slide_261_img_261.png",
        "answer_letter": "A",
        "answer_text": "Debit capital $8,000 and credit withdrawal $8,000"
    },
    {
        "slide": 262,
        "image": "slides_images/slide_262_img_262.png",
        "answer_letter": "D",
        "answer_text": "$32"
    },
    {
        "slide": 263,
        "image": "slides_images/slide_263_img_263.png",
        "answer_letter": "D",
        "answer_text": "Added to accounting book balance"
    },
    {
        "slide": 264,
        "image": "slides_images/slide_264_img_264.png",
        "answer_letter": "B",
        "answer_text": "Do not explain the changes in cash during the period"
    },
    {
        "slide": 265,
        "image": "slides_images/slide_265_img_265.png",
        "answer_letter": "A",
        "answer_text": "Paying wages"
    },
    {
        "slide": 266,
        "image": "slides_images/slide_266_img_266.png",
        "answer_letter": "D",
        "answer_text": "Cash received from customers"
    },
    {
        "slide": 267,
        "image": "slides_images/slide_267_img_267.png",
        "answer_letter": "D",
        "answer_text": "The left-hand side of a T-account"
    },
    {
        "slide": 268,
        "image": "slides_images/slide_268_img_268.png",
        "answer_letter": "C",
        "answer_text": "Purchased supplies on credit."
    },
    {
        "slide": 269,
        "image": "slides_images/slide_269_img_269.png",
        "answer_letter": "E",
        "answer_text": "None of these"
    },
    {
        "slide": 270,
        "image": "slides_images/slide_270_img_270.png",
        "answer_letter": "E",
        "answer_text": "An increase in the balance of the owner's withdrawals account"
    },
    {
        "slide": 271,
        "image": "slides_images/slide_271_img_271.png",
        "answer_letter": "A",
        "answer_text": "Occurs when a company issues bonds with a contract rate less than the market rate."
    },
    {
        "slide": 272,
        "image": "slides_images/slide_272_img_272.png",
        "answer_letter": "B",
        "answer_text": "Ending inventory is equal to merchandise available for sale minus cost of goods sold."
    },
    {
        "slide": 273,
        "image": "slides_images/slide_273_img_273.png",
        "answer_letter": "A",
        "answer_text": "Debit Cash $300, Debit Accounts Receivable $700, Credit Revenue $1,000"
    },
    {
        "slide": 274,
        "image": "slides_images/slide_274_img_274.png",
        "answer_letter": "B",
        "answer_text": "To encourage prompt payment"
    },
    {
        "slide": 275,
        "image": "slides_images/slide_275_img_275.png",
        "answer_letter": "E",
        "answer_text": "An amount assigned to no-par stock by the corporation's board of directors."
    },
    {
        "slide": 276,
        "image": "slides_images/slide_276_img_276.png",
        "answer_letter": "A",
        "answer_text": "Occurs when a corporation sells its stock for more than par..."
    },
    {
        "slide": 277,
        "image": "slides_images/slide_277_img_277.png",
        "answer_letter": "B",
        "answer_text": "Office supplies"
    },
    {
        "slide": 278,
        "image": "slides_images/slide_278_img_278.png",
        "answer_letter": "B",
        "answer_text": "Office supplies"
    },
    {
        "slide": 279,
        "image": "slides_images/slide_279_img_279.png",
        "answer_letter": "E",
        "answer_text": "$1,114"
    },
    {
        "slide": 280,
        "image": "slides_images/slide_280_img_280.png",
        "answer_letter": "A",
        "answer_text": "Debit to Notes Receivable for $15,000."
    },
    {
        "slide": 281,
        "image": "slides_images/slide_281_img_281.png",
        "answer_letter": "D",
        "answer_text": "Current liabilities include accounts payable, unearned revenues, and salaries payable."
    },
    {
        "slide": 282,
        "image": "slides_images/slide_282_img_282.png",
        "answer_letter": "B",
        "answer_text": "Changes in retained earnings over a period"
    },
    {
        "slide": 283,
        "image": "slides_images/slide_283_img_283.png",
        "answer_letter": "B",
        "answer_text": "Received cash for an accounts receivable."
    },
    {
        "slide": 284,
        "image": "slides_images/slide_284_img_284.png",
        "answer_letter": "C",
        "answer_text": "$400"
    },
    {
        "slide": 285,
        "image": "slides_images/slide_285_img_285.png",
        "answer_letter": "C",
        "answer_text": "$67.16"
    },
    {
        "slide": 286,
        "image": "slides_images/slide_286_img_286.png",
        "answer_letter": "B",
        "answer_text": "$150"
    },
    {
        "slide": 287,
        "image": "slides_images/slide_287_img_287.png",
        "answer_letter": "E",
        "answer_text": "Amounts to be received in the future from customers for delivery of products or services in the current period."
    },
    {
        "slide": 288,
        "image": "slides_images/slide_288_img_288.png",
        "answer_letter": "C",
        "answer_text": "Current liability."
    },
    {
        "slide": 289,
        "image": "slides_images/slide_289_img_289.png",
        "answer_letter": "C",
        "answer_text": "Debit Cash, credit Unearned Revenue."
    },
    {
        "slide": 290,
        "image": "slides_images/slide_290_img_290.png",
        "answer_letter": "B",
        "answer_text": "Can be issued in return for money borrowed from a bank."
    },
    {
        "slide": 291,
        "image": "slides_images/slide_291_img_291.png",
        "answer_letter": "B",
        "answer_text": "Bond indenture."
    },
    {
        "slide": 292,
        "image": "slides_images/slide_292_img_292.png",
        "answer_letter": "D",
        "answer_text": "Debit Cash $14,550; Debit Sales Discounts $450; Credit Accounts Receivable $15,000."
    },
    {
        "slide": 293,
        "image": "slides_images/slide_293_img_293.png",
        "answer_letter": "A",
        "answer_text": "All goods owned by a company and held for sale."
    },
    {
        "slide": 294,
        "image": "slides_images/slide_294_img_294.png",
        "answer_letter": "B",
        "answer_text": "Shipping point"
    },
    {
        "slide": 295,
        "image": "slides_images/slide_295_img_295.png",
        "answer_letter": "B",
        "answer_text": "Common stock."
    },
    {
        "slide": 296,
        "image": "slides_images/slide_296_img_296.png",
        "answer_letter": "B",
        "answer_text": "Paid-in capital and retained earnings."
    },
    {
        "slide": 297,
        "image": "slides_images/slide_297_img_297.png",
        "answer_letter": "B",
        "answer_text": "Date of declaration."
    },
    {
        "slide": 298,
        "image": "slides_images/slide_298_img_298.png",
        "answer_letter": "B",
        "answer_text": "Value assigned per share by the corporate charter."
    },
    {
        "slide": 299,
        "image": "slides_images/slide_299_img_299.png",
        "answer_letter": "B",
        "answer_text": "No-par stock."
    },
    {
        "slide": 300,
        "image": "slides_images/slide_300_img_300.png",
        "answer_letter": "E",
        "answer_text": "Debit Notes Payable $50,000; debit Interest Expense $1,000; credit Cash $51,000"
    },
    {
        "slide": 301,
        "image": "slides_images/slide_301_img_301.png",
        "answer_letter": "C",
        "answer_text": "Account payable"
    },
    {
        "slide": 302,
        "image": "slides_images/slide_302_img_302.png",
        "answer_letter": "C",
        "answer_text": "$71,000"
    },
    {
        "slide": 303,
        "image": "slides_images/slide_303_img_303.png",
        "answer_letter": "B",
        "answer_text": "2"
    },
    {
        "slide": 304,
        "image": "slides_images/slide_304_img_304.png",
        "answer_letter": "E",
        "answer_text": "$32,500"
    },
    {
        "slide": 305,
        "image": "slides_images/slide_305_img_305.png",
        "answer_letter": "C",
        "answer_text": "Liabilities not expected to be paid..."
    },
    {
        "slide": 306,
        "image": "slides_images/slide_306_img_306.png",
        "answer_letter": "D",
        "answer_text": "Reconcile the accounts payable"
    },
    {
        "slide": 307,
        "image": "slides_images/slide_307_img_307.png",
        "answer_letter": "B",
        "answer_text": "Tangible assets are assets held for operating activity of the company"
    },
    {
        "slide": 308,
        "image": "slides_images/slide_308_img_308.png",
        "answer_letter": "A",
        "answer_text": "Total asset cost minus depreciation expense"
    },
    {
        "slide": 309,
        "image": "slides_images/slide_309_img_309.png",
        "answer_letter": "B",
        "answer_text": "$750"
    },
    {
        "slide": 310,
        "image": "slides_images/slide_310_img_310.png",
        "answer_letter": "D",
        "answer_text": "$3,900 per year."
    },
    {
        "slide": 311,
        "image": "slides_images/slide_311_img_311.png",
        "answer_letter": "C",
        "answer_text": "Current Liability"
    },
    {
        "slide": 312,
        "image": "slides_images/slide_312_img_312.png",
        "answer_letter": "C",
        "answer_text": "Non - current Liability"
    },
    {
        "slide": 313,
        "image": "slides_images/slide_313_img_313.png",
        "answer_letter": "A",
        "answer_text": "Replacement cost"
    },
    {
        "slide": 314,
        "image": "slides_images/slide_314_img_314.png",
        "answer_letter": "B",
        "answer_text": "Obtaining a long-term loan."
    },
    {
        "slide": 315,
        "image": "slides_images/slide_315_img_315.png",
        "answer_letter": "D",
        "answer_text": "Cash paid to suppliers"
    },
    {
        "slide": 316,
        "image": "slides_images/slide_316_img_316.png",
        "answer_letter": "B",
        "answer_text": "Added to Bank statement balance"
    },
    {
        "slide": 317,
        "image": "slides_images/slide_317_img_317.png",
        "answer_letter": "A",
        "answer_text": "A debit increases an asset while a credit decreases an asset"
    },
    {
        "slide": 318,
        "image": "slides_images/slide_318_img_318.png",
        "answer_letter": "B",
        "answer_text": "$48,000."
    },
    {
        "slide": 319,
        "image": "slides_images/slide_319_img_319.png",
        "answer_letter": "B",
        "answer_text": "Buying office supplies on credit $8,000"
    },
    {
        "slide": 320,
        "image": "slides_images/slide_320_img_320.png",
        "answer_letter": "D",
        "answer_text": "None of these"
    },
    {
        "slide": 321,
        "image": "slides_images/slide_321_img_321.png",
        "answer_letter": "A",
        "answer_text": "Occurs when a company issues bonds with a contract rate less than the market rate."
    },
    {
        "slide": 322,
        "image": "slides_images/slide_322_img_322.png",
        "answer_letter": "B",
        "answer_text": "Debit Cash $2,000 and Unearned Revenue $2,000"
    },
    {
        "slide": 323,
        "image": "slides_images/slide_323_img_323.png",
        "answer_letter": "A",
        "answer_text": "Debit Accounts Payable $15,000; Credit Cash $14,700; Credit Inventory $300"
    },
    {
        "slide": 324,
        "image": "slides_images/slide_324_img_324.png",
        "answer_letter": "C",
        "answer_text": "Referred to as paid-in capital"
    },
    {
        "slide": 325,
        "image": "slides_images/slide_325_img_325.png",
        "answer_letter": "A",
        "answer_text": "Issued."
    },
    {
        "slide": 326,
        "image": "slides_images/slide_326_img_326.png",
        "answer_letter": "D",
        "answer_text": "Account payable."
    },
    {
        "slide": 327,
        "image": "slides_images/slide_327_img_327.png",
        "answer_letter": "B",
        "answer_text": "Used supplies"
    },
    {
        "slide": 328,
        "image": "slides_images/slide_328_img_328.png",
        "answer_letter": "C",
        "answer_text": "COGS understated by $5,000, Net income overstated by $5,000"
    },
    {
        "slide": 329,
        "image": "slides_images/slide_329_img_329.png",
        "answer_letter": "B",
        "answer_text": "625"
    },
    {
        "slide": 330,
        "image": "slides_images/slide_330_img_330.png",
        "answer_letter": "A",
        "answer_text": "Note payable"
    },
    {
        "slide": 331,
        "image": "slides_images/slide_331_img_331.png",
        "answer_letter": "D",
        "answer_text": "$688,750"
    },
    {
        "slide": 332,
        "image": "slides_images/slide_332_img_332.png",
        "answer_letter": "D",
        "answer_text": "$12,160."
    },
    {
        "slide": 333,
        "image": "slides_images/slide_333_img_333.png",
        "answer_letter": "A",
        "answer_text": "Write off an uncollectible account receivable"
    },
    {
        "slide": 334,
        "image": "slides_images/slide_334_img_334.png",
        "answer_letter": "B",
        "answer_text": "$47,000"
    },
    {
        "slide": 335,
        "image": "slides_images/slide_335_img_335.png",
        "answer_letter": "A",
        "answer_text": "Interest."
    },
    {
        "slide": 336,
        "image": "slides_images/slide_336_img_336.png",
        "answer_letter": "B",
        "answer_text": "Debit Accounts Payable $25,000; credit Notes Payable $25,000"
    },
    {
        "slide": 337,
        "image": "slides_images/slide_337_img_337.png",
        "answer_letter": "A",
        "answer_text": "Option A"
    },
    {
        "slide": 338,
        "image": "slides_images/slide_338_img_338.png",
        "answer_letter": "B",
        "answer_text": "Are Unearned revenues."
    },
    {
        "slide": 339,
        "image": "slides_images/slide_339_img_339.png",
        "answer_letter": "D",
        "answer_text": "The market rate of interest is the same as the contract rate of interest."
    },
    {
        "slide": 340,
        "image": "slides_images/slide_340_img_340.png",
        "answer_letter": "C",
        "answer_text": "$9,800"
    },
    {
        "slide": 341,
        "image": "slides_images/slide_341_img_341.png",
        "answer_letter": "C",
        "answer_text": "$158.40"
    },
    {
        "slide": 342,
        "image": "slides_images/slide_342_img_342.png",
        "answer_letter": "C",
        "answer_text": "$15.38"
    },
    {
        "slide": 343,
        "image": "slides_images/slide_343_img_343.png",
        "answer_letter": "A",
        "answer_text": "Issued."
    },
    {
        "slide": 344,
        "image": "slides_images/slide_344_img_344.png",
        "answer_letter": "D",
        "answer_text": "$688,750"
    },
    {
        "slide": 345,
        "image": "slides_images/slide_345_img_345.png",
        "answer_letter": "B",
        "answer_text": "Debit Common Dividend Payable $12,000; credit Cash $12,000."
    },
    {
        "slide": 346,
        "image": "slides_images/slide_346_img_346.png",
        "answer_letter": "A",
        "answer_text": "Issued."
    },
    {
        "slide": 347,
        "image": "slides_images/slide_347_img_347.png",
        "answer_letter": "A",
        "answer_text": "Debit Retained Earnings $4,000; credit Common Dividends Payable $4,000."
    },
    {
        "slide": 348,
        "image": "slides_images/slide_348_img_348.png",
        "answer_letter": "A",
        "answer_text": "Option A"
    },
    {
        "slide": 349,
        "image": "slides_images/slide_349_img_349.png",
        "answer_letter": "A",
        "answer_text": "Generally when an expense or withdraw is involved in a transaction, it will be debit"
    },
    {
        "slide": 350,
        "image": "slides_images/slide_350_img_350.png",
        "answer_letter": "C",
        "answer_text": "Merchandise available for sale includes Beginning inventory and Net cost of purchases."
    },
    {
        "slide": 351,
        "image": "slides_images/slide_351_img_351.png",
        "answer_letter": "E",
        "answer_text": "Assets increase by $75,000 and liabilities increase by $75,000."
    },
    {
        "slide": 352,
        "image": "slides_images/slide_352_img_352.png",
        "answer_letter": "B",
        "answer_text": "Office supplies"
    },
    {
        "slide": 353,
        "image": "slides_images/slide_353_img_353.png",
        "answer_letter": "A",
        "answer_text": "Going-concern principle."
    },
    {
        "slide": 354,
        "image": "slides_images/slide_354_img_354.png",
        "answer_letter": "C",
        "answer_text": "Equity."
    },
    {
        "slide": 355,
        "image": "slides_images/slide_355_img_355.png",
        "answer_letter": "A",
        "answer_text": "Current liabilities."
    },
    {
        "slide": 356,
        "image": "slides_images/slide_356_img_356.png",
        "answer_letter": "A",
        "answer_text": "Debit Income Summary $50,000; Credit Rent Expense $20,000, Credit Salaries Expense $30,000"
    },
    {
        "slide": 357,
        "image": "slides_images/slide_357_img_357.png",
        "answer_letter": "E",
        "answer_text": "$4,375"
    },
    {
        "slide": 358,
        "image": "slides_images/slide_358_img_358.png",
        "answer_letter": "A",
        "answer_text": "$2,687.50"
    },
    {
        "slide": 359,
        "image": "slides_images/slide_359_img_359.png",
        "answer_letter": "D",
        "answer_text": "$400"
    },
    {
        "slide": 360,
        "image": "slides_images/slide_360_img_360.png",
        "answer_letter": "B",
        "answer_text": "Tangible assets are assets held for operating activity of the company"
    },
    {
        "slide": 361,
        "image": "slides_images/slide_361_img_361.png",
        "answer_letter": "B",
        "answer_text": "Non - current asset"
    },
    {
        "slide": 362,
        "image": "slides_images/slide_362_img_362.png",
        "answer_letter": "A",
        "answer_text": "Option A"
    },
    {
        "slide": 363,
        "image": "slides_images/slide_363_img_363.png",
        "answer_letter": "A",
        "answer_text": "Borrowing."
    },
    {
        "slide": 364,
        "image": "slides_images/slide_364_img_364.png",
        "answer_letter": "C",
        "answer_text": "Purchase of land."
    },
    {
        "slide": 365,
        "image": "slides_images/slide_365_img_365.png",
        "answer_letter": "C",
        "answer_text": "The left side of a T-account is the debit side."
    },
    {
        "slide": 366,
        "image": "slides_images/slide_366_img_366.png",
        "answer_letter": "D",
        "answer_text": "Debit Withdrawals and credit Cash."
    },
    {
        "slide": 367,
        "image": "slides_images/slide_367_img_367.png",
        "answer_letter": "E",
        "answer_text": "None of these"
    },
    {
        "slide": 368,
        "image": "slides_images/slide_368_img_368.png",
        "answer_letter": "B",
        "answer_text": "Debit withdrawal..."
    },
    {
        "slide": 369,
        "image": "slides_images/slide_369_img_369.png",
        "answer_letter": "A",
        "answer_text": "Occurs when a company issues bonds with a contract rate less than the market rate."
    },
    {
        "slide": 370,
        "image": "slides_images/slide_370_img_370.png",
        "answer_letter": "A",
        "answer_text": "Debit Cash $300, Debit Accounts Receivable $700, Credit Revenue $1,000"
    },
    {
        "slide": 371,
        "image": "slides_images/slide_371_img_371.png",
        "answer_letter": "B",
        "answer_text": "At the end of the accounting period"
    },
    {
        "slide": 372,
        "image": "slides_images/slide_372_img_372.png",
        "answer_letter": "E",
        "answer_text": "An amount assigned to no-par stock by the corporation's board of directors."
    },
    {
        "slide": 373,
        "image": "slides_images/slide_373_img_373.png",
        "answer_letter": "A",
        "answer_text": "preemptive right."
    },
    {
        "slide": 374,
        "image": "slides_images/slide_374_img_374.png",
        "answer_letter": "B",
        "answer_text": "Dr. Accounts Receivable 500 Cr. Service Revenue"
    },
    {
        "slide": 375,
        "image": "slides_images/slide_375_img_375.png",
        "answer_letter": "A",
        "answer_text": "Option A"
    },
    {
        "slide": 376,
        "image": "slides_images/slide_376_img_376.png",
        "answer_letter": "C",
        "answer_text": "Averaging the cost of all units available for sale"
    },
    {
        "slide": 377,
        "image": "slides_images/slide_377_img_377.png",
        "answer_letter": "A",
        "answer_text": "Debit to Notes Receivable for $15,000."
    },
    {
        "slide": 378,
        "image": "slides_images/slide_378_img_378.png",
        "answer_letter": "D",
        "answer_text": "Current liabilities include accounts payable, unearned revenues, and salaries payable."
    },
    {
        "slide": 379,
        "image": "slides_images/slide_379_img_379.png",
        "answer_letter": "B",
        "answer_text": "Changes in retained earnings over a period"
    },
    {
        "slide": 380,
        "image": "slides_images/slide_380_img_380.png",
        "answer_letter": "B",
        "answer_text": "Received cash for an accounts receivable."
    },
    {
        "slide": 381,
        "image": "slides_images/slide_381_img_381.png",
        "answer_letter": "C",
        "answer_text": "$400"
    },
    {
        "slide": 382,
        "image": "slides_images/slide_382_img_382.png",
        "answer_letter": "A",
        "answer_text": "Debit allowance for doubtful accounts 3000, Credit account receivable"
    },
    {
        "slide": 383,
        "image": "slides_images/slide_383_img_383.png",
        "answer_letter": "B",
        "answer_text": "$150"
    },
    {
        "slide": 384,
        "image": "slides_images/slide_384_img_384.png",
        "answer_letter": "B",
        "answer_text": "Can be issued in return for money borrowed from a bank."
    },
    {
        "slide": 385,
        "image": "slides_images/slide_385_img_385.png",
        "answer_letter": "C",
        "answer_text": "Debit Cash, credit Unearned Revenue."
    },
    {
        "slide": 386,
        "image": "slides_images/slide_386_img_386.png",
        "answer_letter": "E",
        "answer_text": "Amounts to be received in the future from customers for delivery of products or services in the current period."
    },
    {
        "slide": 387,
        "image": "slides_images/slide_387_img_387.png",
        "answer_letter": "C",
        "answer_text": "Current liability."
    },
    {
        "slide": 388,
        "image": "slides_images/slide_388_img_388.png",
        "answer_letter": "B",
        "answer_text": "Bond indenture."
    },
    {
        "slide": 389,
        "image": "slides_images/slide_389_img_389.png",
        "answer_letter": "D",
        "answer_text": "Debit Cash $14,550; Debit Sales Discounts $450; Credit Accounts Receivable $15,000."
    },
    {
        "slide": 390,
        "image": "slides_images/slide_390_img_390.png",
        "answer_letter": "A",
        "answer_text": "All goods owned by a company and held for sale."
    },
    {
        "slide": 391,
        "image": "slides_images/slide_391_img_391.png",
        "answer_letter": "A",
        "answer_text": "Inventory costs"
    },
    {
        "slide": 392,
        "image": "slides_images/slide_392_img_392.png",
        "answer_letter": "B",
        "answer_text": "No-par stock."
    },
    {
        "slide": 393,
        "image": "slides_images/slide_393_img_393.png",
        "answer_letter": "B",
        "answer_text": "Common stock."
    },
    {
        "slide": 394,
        "image": "slides_images/slide_394_img_394.png",
        "answer_letter": "B",
        "answer_text": "Date of declaration."
    },
    {
        "slide": 395,
        "image": "slides_images/slide_395_img_395.png",
        "answer_letter": "B",
        "answer_text": "Paid-in capital and retained earnings."
    },
    {
        "slide": 396,
        "image": "slides_images/slide_396_img_396.png",
        "answer_letter": "B",
        "answer_text": "Value assigned per share by the corporate charter."
    },
    {
        "slide": 397,
        "image": "slides_images/slide_397_img_397.png",
        "answer_letter": "C",
        "answer_text": "Bad debts"
    },
    {
        "slide": 398,
        "image": "slides_images/slide_398_img_398.png",
        "answer_letter": "B",
        "answer_text": "Tangible assets are assets held for operating activity of the company"
    },
    {
        "slide": 399,
        "image": "slides_images/slide_399_img_399.png",
        "answer_letter": "A",
        "answer_text": "The owner's equity account that contains the amount invested in the sole proprietorship by Mary Smith plus the net income since the company began minus the draws made by Mary Smith since the company began"
    }
];