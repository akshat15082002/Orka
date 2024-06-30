This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:


```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



<!--  todo 1. remove console.logs and error logs  -->
<!--!! todo 2. make function components server wherever possible -->
<!--!! 2. add a navbar for signin -->
<!-- done but need customizing  -->

<!--todo 4. connect to db and store user data PRIMARY-->

<!--todo 4. find a way to make question easy SECONDARY-->

<!-- step 1. provide user an interface to write problem statements uing word like editor which converts it into HTML -->
<!-- step2: the user specifies function name input type and output type-->
<!-- step 3: user clicks submit button and a server action is run which converts the data in json format  -->
<!-- step 4: it also connects to database and stores the question in teh data base -->
<!-- step 5: -->

<!--!! todo 5. add env variables to local file -->
<!-- added except python3_8 -->

<!--!! todo 6. create function to run and submit : -->


<!--todo 7. to fix the black space below body : SECONDARY-->

<!--todo 8: bring the boilerplate and function names : SECONDARY -->
<!-- step1: on submit button clicking a popup below should open with loading sign  -->
<!-- step2: when request answered then either show the error in the editor or show the accepted result logo -->
<!-- OPTIONAL FEATURE: switch to code mirror to highlight a line on error -->
<!--!! step3: we also need a way for user to close the popup that opened -->
<!--!! step4: we also need to convert it into binary and download it all manually --> 
        <!-- !!soln:just parse as text -->
<!--!! step5: we also need a way to stop executing get results when result is obtained -->
        <!-- done  -->
<!-- step6: we need a way to highlight in the line where the error is and not reset the page SECONDARY-->

<!-- todo 7. chnage theme of signin and editor page to black or grey:secondary -->
<!-- todo 9: theme option: secondary -->

<!-- username : advaitasoni-->
<!-- db:password jKqeQ6SI2N2mwCOv -->

ERROR CODE:
<!-- code is  CODE_COMPILED
----Final Show is ----
: {
  he_id: '44136cb1-c581-4f51-9442-134478e94a3c',
  request_status: { code: 'CODE_COMPILED', message: 'Compilation step is over' },
  status_update_url: 'https://api.hackerearth.com/v4/partner/code-evaluation/submissions/44136cb1-c581-4f51-9442-134478e94a3c/',
  result: {
    compile_status: '  File "solution.py3", line 1\n' +
      '    this is a code for python\n' +
      '              ^\n' +
      'SyntaxError: invalid syntax\n' +
      '\n',
    run_status: {
      output: null,
      status: 'NA',
      status_detail: null,
      time_used: 0,
      memory_used: 0
    }
  }
} -->
SUCCESS" CODE:
<!-- : {
  he_id: '19d32f89-146c-47f2-b34d-80085c0883de',
  request_status: {
    code: 'REQUEST_COMPLETED',
    message: 'Your request has been completed successfully'
  },
  status_update_url: 'https://api.hackerearth.com/v4/partner/code-evaluation/submissions/19d32f89-146c-47f2-b34d-80085c0883de/',
  result: {
    compile_status: 'OK',
    run_status: {
      output: 'https://he-s3.s3.amazonaws.com/media/userdata/AnonymousUser/code/faada16',
      status: 'AC',
      status_detail: 'NA',
      time_used: 0.0175,
      memory_used: 2
    }
  }
} -->

Waiting code:
<!-- : {
  he_id: 'fb1dc997-85e7-4d87-800f-fa036e8bb04b',
  request_status: { code: 'CODE_COMPILED', message: 'Compilation step is over' }, 
  status_update_url: 'https://api.hackerearth.com/v4/partner/code-evaluation/submissions/fb1dc997-85e7-4d87-800f-fa036e8bb04b/',
  result: {
    compile_status: 'OK',
    run_status: {
      output: null,
      status: 'NA',
      status_detail: null,
      time_used: 0,
      memory_used: 0
    }
  }
} -->
//status detail : "NA" means accepted
//result compile status for waiting or error