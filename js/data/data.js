export const data = {
  meta: {
    key: 'meta',
    sections: ['download', 'warranty', 'care', 'cashback', 'clients'],
    categories: [
      {
        name: 'Learn',
        links: [
          {
            name: 'Help center',
            url: 'https://example.com',
          },
          {
            name: 'Join ZEN team',
            url: 'https://example.com',
          },
          {
            name: 'Privacy Policy',
            url: 'https://example.com',
          },
          {
            name: 'Cookies',
            url: 'https://example.com',
          },
          {
            name: 'Terms of use',
            url: 'https://example.com',
          },
        ],
      },
    ],
    details: [
      'ZEN.COM is a licensed financial institution under the supervision of the Central Bank of Lithuania approved by European Banking Authority for 31 countries.',
      'Registration number of the company 304749651, VAT ID LT100011714916.',
      'License of electronic money institutions number LB000457.',
      'Share capital 2.185.000,00 EUR.',
      'Company address: Mėsinių g. 5, LT-01133, Vilnius, Lithuania.',
      'Sales Office: ul. Emilii Plater 53, 00-113 Warsaw, Poland.',
    ],
  },
  download: {
    key: 'download',
    title: {
      value: 'Peaceful shopping mindful money',
      priority: 1,
    },
    texts: [
      'See how we can help with making your shopping experience and money management more ZEN.',
    ],
    stores: [
      {
        name: 'app store',
        key: 'apple',
      },
      {
        name: 'google play',
        key: 'google',
      },
    ],
    image: {
      source: '/assets/images/image1.jpg',
      description: 'image 1',
    },
  },
  warranty: {
    key: 'warranty',
    title: {
      value: '1-year warranty boost',
      priority: 2,
    },
    texts: [
      'ZEN cards have a very neat feature that will help you whenever your electronic devices start failing after the standard warranty ends, which is pretty common.',
      'When you buy any electronics with your ZEN shopping Mastercard, their warranty gets extended by one year. How does it work? It simply does. Automatically.',
    ],
    image: {
      source: './assets/images/image2.jpg',
      description: 'image 2',
    },
  },
  care: {
    key: 'care',
    title: {
      value: 'ZEN Care',
      priority: 2,
    },
    texts: [
      "Shopping online is usually a delightful experience. Until it's not.",
      'Until something you buy, proves to be faulty, missing or a totally wrong item, you’re in for long product return procedures.',
      'But, here comes ZEN Care: a free, built-in shopping protection.',
    ],
    image: {
      source: './assets/images/image3.jpg',
      description: 'image 3',
    },
  },
  cashback: {
    key: 'cashback',
    title: {
      value: 'and cashback!',
      priority: 2,
    },
    texts: [
      'It saves a little bit of money while you’re shopping, but in many cases it takes ages to get anything out of it.',
      'We gave it a thought and made cashback way more friendly.',
      'Up to 14% of what you spend using ZEN Mastercard ® will materialize on your account right after the purchase.',
    ],
  },
  clients: {
    key: 'clients',
    clients: [
      {
        image: {
          source: './assets/clients/brand1.svg',
          description: 'brand 1',
        },
      },
      {
        image: {
          source: './assets/clients/brand2.svg',
          description: 'brand 2',
        },
      },
      {
        image: {
          source: './assets/clients/brand3.svg',
          description: 'brand 3',
        },
      },
      {
        image: {
          source: './assets/clients/brand4.svg',
          description: 'brand 4',
        },
      },
      {
        image: {
          source: './assets/clients/brand5.svg',
          description: 'brand 5',
        },
      },
      {
        image: {
          source: './assets/clients/brand6.svg',
          description: 'brand 6',
        },
      },
      {
        image: {
          source: './assets/clients/brand7.svg',
          description: 'brand 7',
        },
      },
      {
        image: {
          source: './assets/clients/brand8.svg',
          description: 'brand 8',
        },
      },
    ],
  },
};
