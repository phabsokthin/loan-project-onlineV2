<template>
  <div class="min-h-screen back_image">
    <!-- ✅ Navbar -->
    <div class="hidden lg:block">
      <NavbarComponent />
    </div>
    <div class="lg:hidden">
      <MobileView />
    </div>

    <!-- ✅ Account Section -->
    <div class="w-full max-w-2xl mx-auto px-4 py-6 space-y-6">
      <!-- Account Card -->
      <div class="bg-black/30 rounded-xl shadow-lg p-6 text-center text-white">
        <div class="flex flex-col items-center">
          <!-- User Icon -->
          <div class="w-20 h-20 mb-4 flex items-center justify-center rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 682.66669 682.66669"
              class="text-white"
            >
              <g transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)">
                <g>
                  <path
                    d="M 20,256 C 20,125.661 125.661,20 256,20 
                       386.339,20 492,125.661 492,256 
                       492,386.339 386.339,492 256,492 
                       125.661,492 20,386.339 20,256 Z"
                    stroke="currentColor"
                    stroke-width="40"
                    fill="none"
                  />
                  <circle cx="256" cy="333" r="76" stroke="currentColor" stroke-width="40" fill="none" />
                  <path
                    d="m 369.0391,136 c -23.499,28.689 -59.197,47 -99.174,47 
                       h -23.73 c -39.977,0 -75.675,-18.311 -99.174,-47"
                    stroke="currentColor"
                    stroke-width="40"
                    fill="none"
                  />
                </g>
              </g>
            </svg>
          </div>

          <!-- User Info -->
          <h3 class="text-lg font-semibold">Account</h3>
          <p class="text-xl font-bold mt-1">
            {{ user?.phoneNumber || "0965422332" }}
          </p>
        </div>
      </div>

      <!-- Loan & Credit Score Card -->
      <div class="bg-black/30 rounded-xl shadow-lg p-6 text-white">
        <div class="flex flex-row lg:flex-row items-center justify-between gap-6">
          <!-- ✅ Credit Score -->
          <div class="flex flex-col items-center lg:items-start">
            <img :src="creditscore" alt="creditscore" class="h-16" />
            <p class="text-sm mt-2">
              Credit Score:
              <span class="font-bold">{{ userDoc?.[0]?.credit || 500 }}</span>
            </p>
          </div>

          <!-- ✅ Loan Info -->
          <div class="flex flex-col items-center lg:items-end space-y-3 text-center lg:text-right">
            <!-- Loan Amount -->
            <div class="flex items-center space-x-2">
              <svg
                id="Layer_1"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-white"
              >
                <path
                  d="m16.6 5.2-10.6 10.6c-2.2-.1-3.9-2-3.9-4.2v-4.7c1.1-1 2.6-1.6 4.2-1.6zm32.5 0h-4.5l10.5 10.5v-4.5c0-3.3-2.7-6-6-6zm-22.9-1.2c-1.5-1.5-3.8-1.5-5.2 0l-11.8 11.8h11.2l8.8-8.8zm14.2 0c-1.5-1.5-3.8-1.5-5.3 0l-11.8 11.8h28.9zm7.1 26.6h13.6c.2 0 .5 0 .7.1v-6.7c0-3.3-2.7-6-6-6h-49.4c-3.5 0-6.4-2.9-6.4-6.4v38.8c0 5.9 4.8 10.7 10.7 10.7h45.1c3.3 0 6-2.7 6-6v-8.9c-.2 0-.5 0-.7 0h-13.6c-4.3 0-7.9-3.5-7.9-7.9s3.6-7.9 7.9-7.9zm-.1 6.8c-.6 0-1 .5-1 1s.4 1 1 1 1-.5 1-1-.5-1-1-1zm16.7-1.8v5.7c0 1.6-1.3 2.9-2.9 2.9h-13.6c-1.6 0-3-0.6-4.1-1.7s-1.7-2.5-1.7-4.1c0-3.2 2.6-5.7 5.8-5.7h13.6c1.6 0 2.9 1.3 2.9 2.9zm-13.5 2.8c0-1.7-1.4-3.2-3.2-3.2-1.7 0-3.2 1.4-3.2 3.2s1.4 3.2 3.2 3.2c1.7 0 3.2-1.4 3.2-3.2z"
                  fill="#ffffff"
                />
              </svg>
              <span class="text-lg font-bold">₱200,000</span>
            </div>

            <!-- Installment Period -->
            <div class="flex items-center space-x-2 opacity-80 text-sm">
              <svg
                class="h-5 w-5 text-white"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8 7h8M8 11h8m-6 4h6M5 3h14a2 2 0 012 2v14a2 2 
                     0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z"
                />
              </svg>
              <span>Installment period: 36 months</span>
            </div>
          </div>
        </div>
      </div>

      <!-- ✅ Form Info Card -->
      <div class="bg-black/30 rounded-xl shadow-lg p-4 text-white">
        <div class="space-y-2">
          <!-- Personal Info -->
          <router-link
            to="/persionalProfile"
            class="flex items-center justify-between p-3 border-b border-white/20 hover:bg-white/10 rounded-lg"
          >
            <div class="flex items-center space-x-3">
              <svg version="1.1" id="Layer_1" class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 468.179 468.179" style="enable-background:new 0 0 468.179 468.179;" xml:space="preserve" width="300" height="300" xmlns:svgjs="http://svgjs.dev/svgjs"><g width="100%" height="100%" transform="matrix(1,0,0,1,0,0)"><g>
                <g>
                  <g>
                    <path d="M332.587,226.233C307.597,257.701,272.755,276,234.09,276c-39.772,0-74.273-19.264-98.496-49.767&#10;&#9;&#9;&#9;&#9;C83.66,259.029,49.09,316.93,49.09,382.763c0,19.942,10.92,47.734,62.942,66.889c32.45,11.948,75.798,18.527,122.058,18.527&#10;&#9;&#9;&#9;&#9;c46.26,0,89.607-6.579,122.058-18.527c52.023-19.154,62.942-46.946,62.942-66.889C419.09,316.93,384.52,259.029,332.587,226.233z&#10;&#9;&#9;&#9;&#9;" fill="#ffffff" fill-opacity="1" data-original-color="#000000ff" stroke="none" stroke-opacity="1"/>
                    <path d="M234.09,246c58.304,0,103.2-56.357,103.2-123c0-66.672-44.919-123-103.2-123c-58.304,0-103.2,56.357-103.2,123&#10;&#9;&#9;&#9;&#9;C130.89,189.672,175.81,246,234.09,246z" fill="#ffffff" fill-opacity="1" data-original-color="#000000ff" stroke="none" stroke-opacity="1"/>
                  </g>
                </g>
              </g></g></svg>
              <span class="font-medium">Personal Info</span>
            </div>
            <div class="flex items-center space-x-2 text-sm">
              <span class="opacity-80">Incomplete</span>
              <span>&gt;</span>
            </div>
          </router-link>

          <!-- Identify Picture -->
          <router-link
            to="/identifyPicture"
            class="flex items-center justify-between p-3 border-b border-white/20 hover:bg-white/10 rounded-lg"
          >
            <div class="flex items-center space-x-3">
              <svg enable-background="new 0 0 32 32" viewBox="0 0 32 32" class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" width="300" height="300" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs"><g width="100%" height="100%" transform="matrix(1,0,0,1,0,0)"><g id="grid"/><g id="Layer_2"/><g id="Layer_3"/><g id="Layer_4"/><g id="Layer_5"/><g id="Layer_6"/><g id="Layer_7"/><g id="Layer_8"/><g id="Layer_9"/><g id="Layer_10"/><g id="Layer_11"/><g id="Layer_12"/><g id="Layer_13"/><g id="Layer_14"/><g id="Layer_15"/><g id="Layer_16"/><g id="Layer_17"/><g id="Layer_18"/><g id="Layer_19"/><g id="Layer_20"/><g id="Layer_21"/><g id="Layer_22"/><g id="Layer_23"/><g id="Layer_24"/><g id="Layer_25"/><g id="Layer_26"/><g id="Layer_27"/><g id="Layer_28"/><g id="Layer_29"/><g id="Layer_30"/><g id="Layer_31"/><g id="Layer_32"/><g id="Layer_33"/><g id="Layer_34"/><g id="Layer_35"/><g id="Layer_36"/><g id="Layer_37"/><g id="Layer_38"/><g id="Layer_39"/><g id="Layer_40"/><g id="Layer_41"/><g id="Layer_42"/><g id="Layer_43"/><g id="Layer_44"/><g id="Layer_45"/><g id="Layer_46"/><g id="Layer_47"/><g id="Layer_48"/><g id="Layer_49"/><g id="Layer_50"/><g id="Layer_51"/><g id="Layer_52"/><g id="Layer_53"/><g id="Layer_54"/><g id="Layer_55"><path d="m26.48 15.6847c.3276-.4807.52-1.0604.52-1.6847 0-1.3019-.8385-2.4016-2-2.8157v-5.1843c0-1.6543-1.3457-3-3-3h-16c-1.6543 0-3 1.3457-3 3v20c0 1.6543 1.3457 3 3 3h16c1.6543 0 3-1.3457 3-3v-5h3c.5522 0 1-.4473 1-1 0-1.8502-1.022-3.4506-2.52-4.3153zm-3.48 10.3153c0 .5518-.4487 1-1 1h-16c-.5513 0-1-.4482-1-1v-20c0-.5518.4487-1 1-1h16c.5513 0 1 .4482 1 1v5.1843c-1.1615.4141-2 1.5138-2 2.8157 0 .6243.1924 1.204.52 1.6847-1.498.8647-2.52 2.4651-2.52 4.3153 0 .5527.4478 1 1 1h3z" fill="#ffffff" fill-opacity="1" data-original-color="#000000ff" stroke="none" stroke-opacity="1"/><path d="m16.5 19h-9c-.2761 0-.5.2239-.5.5v1c0 .2761.2239.5.5.5h9c.2761 0 .5-.2239.5-.5v-1c0-.2761-.2239-.5-.5-.5z" fill="#ffffff" fill-opacity="1" data-original-color="#000000ff" stroke="none" stroke-opacity="1"/><path d="m7.5 25h11c.2761 0 .5-.2239.5-.5v-1c0-.2761-.2239-.5-.5-.5h-11c-.2761 0-.5.2239-.5.5v1c0 .2761.2239.5.5.5z" fill="#ffffff" fill-opacity="1" data-original-color="#000000ff" stroke="none" stroke-opacity="1"/><path d="m18.5 11h-11c-.2761 0-.5.2239-.5.5v1c0 .2761.2239.5.5.5h11c.2761 0 .5-.2239.5-.5v-1c0-.2761-.2239-.5-.5-.5z" fill="#ffffff" fill-opacity="1" data-original-color="#000000ff" stroke="none" stroke-opacity="1"/><path d="m18.5 7h-11c-.2761 0-.5.2239-.5.5v1c0 .2761.2239.5.5.5h11c.2761 0 .5-.2239.5-.5v-1c0-.2761-.2239-.5-.5-.5z" fill="#ffffff" fill-opacity="1" data-original-color="#000000ff" stroke="none" stroke-opacity="1"/><path d="m16.5 15h-9c-.2761 0-.5.2239-.5.5v1c0 .2761.2239.5.5.5h9c.2761 0 .5-.2239.5-.5v-1c0-.2761-.2239-.5-.5-.5z" fill="#ffffff" fill-opacity="1" data-original-color="#000000ff" stroke="none" stroke-opacity="1"/></g><g id="Layer_56"/><g id="Layer_57"/><g id="Layer_58"/><g id="Layer_59"/><g id="Layer_60"/><g id="Layer_61"/></g></svg>
              <span class="font-medium">Identify Picture</span>
            </div>
            <div class="flex items-center space-x-2 text-sm">
              <span class="opacity-80">Incomplete</span>
              <span>&gt;</span>
            </div>
          </router-link>

          <!-- Bank Details -->
          <router-link
            to="/bankDetails"
            class="flex items-center justify-between p-3 border-b border-white/20 hover:bg-white/10 rounded-lg"
          >
            <div class="flex items-center space-x-3">
             <svg id="Layer_1" enable-background="new 0 0 388 453" height="300" class="w-6 h-6 text-white" viewBox="0 0 388 453" width="300" xmlns="http://www.w3.org/2000/svg" xmlns:xodm="http://www.corel.com/coreldraw/odm/2003" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs"><g width="100%" height="100%" transform="matrix(1,0,0,1,0,0)"><g id="Layer_x0020_1" clip-rule="evenodd" fill-rule="evenodd"><path d="m19.168 404.636h349.363c10.214 0 18.625 9.312 18.625 20.427v23.731c0 2.403-1.502 4.206-3.605 4.206h-379.703c-1.802 0-3.605-1.802-3.605-4.206v-23.731c0-11.115 8.412-20.427 18.925-20.427z" fill="#ffffff" fill-opacity="1" data-original-color="#000000ff" stroke="none" stroke-opacity="1"/><path d="m220.735 187.448v165.82h-52.269v-165.82z" fill="#ffffff" fill-opacity="1" data-original-color="#000000ff" stroke="none" stroke-opacity="1"/><path d="m339.393 187.448v88.617c-.601 0-1.202 0-1.802 0-20.427 0-38.751 9.613-50.467 24.633v-113.25z" fill="#ffffff" fill-opacity="1" data-original-color="#000000ff" stroke="none" stroke-opacity="1"/><path d="m103.28 187.448v165.82h-52.269v-165.82z" fill="#ffffff" fill-opacity="1" data-original-color="#000000ff" stroke="none" stroke-opacity="1"/><path d="m378.444 136.08h-183.843-183.844c-1.502 0-2.704-.601-3.304-1.802-.3-1.202 0-2.403 1.202-3.304l89.218-63.684 93.123-66.088c2.103-1.502 5.107-1.502 7.21 0l93.123 66.088 89.218 63.684c1.202.901 1.802 2.103 1.202 3.304-.601 1.201-1.803 1.802-3.305 1.802zm-183.843-103.637c22.53 0 40.554 18.324 40.554 40.554 0 22.53-18.024 40.554-40.554 40.554-22.229 0-40.554-18.024-40.554-40.554 0-22.23 18.324-40.554 40.554-40.554z" fill="#ffffff" fill-opacity="1" data-original-color="#000000ff" stroke="none" stroke-opacity="1"/><circle cx="194.601" cy="72.997" r="26.435" fill="#ffffff" fill-opacity="1" data-original-color="#000000ff" stroke="none" stroke-opacity="1"/><path d="m38.394 150.199h77.803v17.123c0 3.304-3.004 6.308-6.308 6.308h-65.487c-3.304 0-6.008-3.004-6.008-6.308z" fill="#ffffff" fill-opacity="1" data-original-color="#000000ff" stroke="none" stroke-opacity="1"/><path d="m155.849 150.199h77.803v17.123c0 3.304-3.004 6.308-6.308 6.308h-65.487c-3.304 0-6.008-3.004-6.008-6.308z" fill="#ffffff" fill-opacity="1" data-original-color="#000000ff" stroke="none" stroke-opacity="1"/><path d="m274.206 150.199h77.803v17.123c0 3.304-2.704 6.308-6.308 6.308h-65.186c-3.304 0-6.308-3.004-6.308-6.308v-17.123z" fill="#ffffff" fill-opacity="1" data-original-color="#000000ff" stroke="none" stroke-opacity="1"/><path d="m38.394 390.517h77.803v-16.822c0-3.605-3.004-6.308-6.308-6.308h-65.487c-3.304 0-6.008 2.704-6.008 6.308z" fill="#ffffff" fill-opacity="1" data-original-color="#000000ff" stroke="none" stroke-opacity="1"/><path d="m155.849 390.517h77.803v-16.822c0-3.605-3.004-6.308-6.308-6.308h-65.487c-3.304 0-6.008 2.704-6.008 6.308z" fill="#ffffff" fill-opacity="1" data-original-color="#000000ff" stroke="none" stroke-opacity="1"/><path d="m274.206 390.517h23.131c-7.81-6.008-14.119-13.818-18.324-22.83-2.704.601-4.806 3.004-4.806 6.008v16.822z" fill="#ffffff" fill-opacity="1" data-original-color="#000000ff" stroke="none" stroke-opacity="1"/><path d="m337.59 290.184c27.637 0 50.166 22.53 50.166 50.166 0 27.937-22.53 50.467-50.166 50.467s-50.166-22.53-50.166-50.467c0-27.636 22.53-50.166 50.166-50.166zm0 37.55c-4.206 0-7.51-3.304-7.51-7.51s3.304-7.51 7.51-7.51 7.51 3.304 7.51 7.51-3.304 7.51-7.51 7.51c4.206 0 7.51 3.304 7.51 7.51v25.534c0 3.905-3.304 7.51-7.51 7.51s-7.51-3.605-7.51-7.51v-25.534c0-4.206 3.305-7.51 7.51-7.51z" fill="#ffffff" fill-opacity="1" data-original-color="#000000ff" stroke="none" stroke-opacity="1"/></g></g></svg>
              <span class="font-medium">Bank Details</span>
            </div>
            <div class="flex items-center space-x-2 text-sm">
              <span class="opacity-80">Incomplete</span>
              <span>&gt;</span>
            </div>
          </router-link>

          <!-- Signature -->
          <router-link
            to="/signature"
            class="flex items-center justify-between p-3 hover:bg-white/10 rounded-lg"
          >
            <div class="flex items-center space-x-3">
                <svg version="1.1" id="Capa_1" class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 25.588 25.588" style="enable-background:new 0 0 25.588 25.588;" xml:space="preserve" width="300" height="300" xmlns:svgjs="http://svgjs.dev/svgjs"><g width="100%" height="100%" transform="matrix(1,0,0,1,0,0)"><g>
                  <path style="" d="M18.724,9.903l3.855,1.416l-3.206,8.729c-0.3,0.821-1.927,3.39-3.06,3.914l-0.275,0.75&#10;&#9;&#9;c-0.07,0.19-0.25,0.309-0.441,0.309c-0.054,0-0.108-0.01-0.162-0.029c-0.243-0.09-0.369-0.359-0.279-0.604l0.26-0.709&#10;&#9;&#9;c-0.575-1.117-0.146-4.361,0.106-5.047L18.724,9.903z M24.303,0.667c-1.06-0.388-2.301,0.414-2.656,1.383l-2.322,6.326l3.854,1.414&#10;&#9;&#9;l2.319-6.325C25.79,2.673,25.365,1.056,24.303,0.667z M17.328,9.576c0.108,0.04,0.219,0.059,0.327,0.059&#10;&#9;&#9;c0.382,0,0.741-0.234,0.882-0.614l2.45-6.608c0.181-0.487-0.068-1.028-0.555-1.208c-0.491-0.178-1.028,0.068-1.209,0.555&#10;&#9;&#9;l-2.45,6.608C16.592,8.855,16.841,9.396,17.328,9.576z M13.384,21.967c-0.253-0.239-0.568-0.537-1.078-0.764&#10;&#9;&#9;c-0.42-0.187-0.829-0.196-1.128-0.203c-0.031,0-0.067-0.001-0.103-0.002c-0.187-0.512-0.566-0.834-1.135-0.96&#10;&#9;&#9;c-0.753-0.159-1.354,0.196-1.771,0.47c0.037-0.21,0.098-0.46,0.143-0.64c0.144-0.58,0.292-1.18,0.182-1.742&#10;&#9;&#9;c-0.087-0.444-0.462-0.774-0.914-0.806c-1.165-0.065-2.117,0.562-2.956,1.129c-0.881,0.595-1.446,0.95-2.008,0.749&#10;&#9;&#9;c-0.686-0.244-0.755-2.101-0.425-3.755c0.295-1.49,0.844-4.264,2.251-5.524c0.474-0.424,1.16-0.883,1.724-0.66&#10;&#9;&#9;c0.663,0.26,1.211,1.352,1.333,2.653c0.051,0.549,0.53,0.952,1.089,0.902c0.55-0.051,0.954-0.539,0.902-1.089&#10;&#9;&#9;c-0.198-2.12-1.192-3.778-2.593-4.329C6.058,7.07,4.724,6.982,3.107,8.429c-1.759,1.575-2.409,4.246-2.88,6.625&#10;&#9;&#9;c-0.236,1.188-0.811,5.13,1.717,6.029c1.54,0.549,2.791-0.298,3.796-0.976c0.184-0.124,0.365-0.246,0.541-0.355&#10;&#9;&#9;c-0.167,0.725-0.271,1.501,0.167,2.155c0.653,0.982,1.576,1.089,2.742,0.321c0.045-0.029,0.097-0.063,0.146-0.097&#10;&#9;&#9;c0.108,0.226,0.299,0.475,0.646,0.645c0.42,0.206,0.84,0.216,1.146,0.224c0.131,0.003,0.31,0.007,0.364,0.031&#10;&#9;&#9;c0.188,0.083,0.299,0.185,0.515,0.389c0.162,0.153,0.333,0.312,0.55,0.476c0.18,0.135,0.39,0.199,0.598,0.199&#10;&#9;&#9;c0.304,0,0.605-0.139,0.801-0.4c0.331-0.442,0.241-1.069-0.201-1.4C13.61,22.183,13.495,22.072,13.384,21.967z" fill="#ffffff" fill-opacity="1" data-original-color="#030104ff" stroke="none" stroke-opacity="1"/>
                  </g><g>
                  </g></g>
                </svg>
              <span class="font-medium">Signature</span>
            </div>
            <div class="flex items-center space-x-2 text-sm">
              <span class="opacity-80">Incomplete</span>
              <span>&gt;</span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavbarComponent from "@/components/client/NavbarComponent.vue";
import MobileView from "./MobileView.vue";
import getUser from "@/firebase/getUser";
import { ref, watch } from "vue";
import getCollectionQueryTerm from "@/firebase/getCollectionQueryTerm";
import { documentId, where } from "firebase/firestore";

// ✅ Import image
const creditscore = new URL("@/assets/Credit_Score.png", import.meta.url).href;

// ✅ User Data
const { user } = getUser();
const userDoc = ref(null);

watch(
  () => user.value?.uid,
  async (newUid) => {
    if (newUid) {
      const { documents } = await getCollectionQueryTerm(
        "customers",
        where(documentId(), "==", newUid)
      );
      watch(() => {
        userDoc.value = documents.value || null;
      });
    }
  },
  { immediate: true }
);
</script>

<style scoped>
.back_image {
  background-image: url("/src/assets/background.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
   min-height: 100vh;
}
</style>
