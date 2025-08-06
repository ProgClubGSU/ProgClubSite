/* empty css                                    */
import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_BkcvDG7p.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_c2u_HCNh.mjs';
import { S as SITE_TITLE } from '../../chunks/consts_Db3kfyLr.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://proggsu.vercel.app");
const $$Forms = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Forms;
  const FORM_REGISTRY = [
    {
      id: "interest-form",
      name: "Interest/Signup Form",
      description: "Main form for new member signups",
      formId: "your-interest-form-id",
      url: "/interest",
      status: "active"
    },
    {
      id: "workshop-attendance",
      name: "Workshop Attendance",
      description: "Check-in for workshop events",
      formId: "your-workshop-form-id",
      url: "/events/attendance?type=workshop",
      status: "draft"
    },
    {
      id: "startup-attendance",
      name: "startup Attendance",
      description: "Check-in for startup events",
      formId: "your-startup-form-id",
      url: "/events/attendance?type=startup",
      status: "draft"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Form Management | ${SITE_TITLE}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 py-12"> <div class="container mx-auto px-4 max-w-6xl"> <!-- Header --> <div class="text-center mb-12"> <h1 class="text-4xl font-bold text-gray-900 mb-4">
Form Management Dashboard
</h1> <p class="text-xl text-gray-600">
Manage all your dynamic Google Forms
</p> </div> <!-- Quick Stats --> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"> <div class="bg-white/70 backdrop-blur-sm rounded-lg p-6 text-center"> <h3 class="text-2xl font-bold text-green-600"> ${FORM_REGISTRY.filter((f) => f.status === "active").length} </h3> <p class="text-gray-600">Active Forms</p> </div> <div class="bg-white/70 backdrop-blur-sm rounded-lg p-6 text-center"> <h3 class="text-2xl font-bold text-yellow-600"> ${FORM_REGISTRY.filter((f) => f.status === "draft").length} </h3> <p class="text-gray-600">Draft Forms</p> </div> <div class="bg-white/70 backdrop-blur-sm rounded-lg p-6 text-center"> <h3 class="text-2xl font-bold text-blue-600"> ${FORM_REGISTRY.length} </h3> <p class="text-gray-600">Total Forms</p> </div> </div> <!-- Forms Table --> <div class="bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg"> <div class="px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600"> <h2 class="text-xl font-bold text-white">All Forms</h2> </div> <div class="overflow-x-auto"> <table class="w-full"> <thead class="bg-gray-50"> <tr> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Form Name
</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Description
</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Status
</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Actions
</th> </tr> </thead> <tbody class="divide-y divide-gray-200"> ${FORM_REGISTRY.map((form) => renderTemplate`<tr class="hover:bg-gray-50"> <td class="px-6 py-4 whitespace-nowrap"> <div class="text-sm font-medium text-gray-900"> ${form.name} </div> <div class="text-sm text-gray-500">
ID: ${form.id} </div> </td> <td class="px-6 py-4"> <div class="text-sm text-gray-900"> ${form.description} </div> <div class="text-xs text-gray-500 font-mono"> ${form.formId} </div> </td> <td class="px-6 py-4 whitespace-nowrap"> <span${addAttribute(`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${form.status === "active" ? "bg-green-100 text-green-800" : form.status === "draft" ? "bg-yellow-100 text-yellow-800" : "bg-gray-100 text-gray-800"}`, "class")}> ${form.status} </span> </td> <td class="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2"> <a${addAttribute(form.url, "href")} class="text-indigo-600 hover:text-indigo-900 bg-indigo-50 px-3 py-1 rounded" target="_blank">
View Form
</a> <a${addAttribute(`/api/forms/get-structure?formId=${form.formId}`, "href")} class="text-green-600 hover:text-green-900 bg-green-50 px-3 py-1 rounded" target="_blank">
API Preview
</a> </td> </tr>`)} </tbody> </table> </div> </div> <!-- How to Add New Forms --> <div class="mt-12 bg-white/70 backdrop-blur-sm rounded-lg p-8"> <h2 class="text-2xl font-bold text-gray-900 mb-6">
How to Add a New Form
</h2> <div class="space-y-6"> <div class="flex items-start space-x-4"> <div class="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
1
</div> <div> <h3 class="font-semibold text-gray-900">Create Google Form</h3> <p class="text-gray-600">Design your form in Google Forms and share it with your service account email</p> </div> </div> <div class="flex items-start space-x-4"> <div class="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
2
</div> <div> <h3 class="font-semibold text-gray-900">Get Form ID</h3> <p class="text-gray-600">Extract the form ID from the Google Form URL or use the Drive API search</p> </div> </div> <div class="flex items-start space-x-4"> <div class="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
3
</div> <div> <h3 class="font-semibold text-gray-900">Create Astro Page</h3> <p class="text-gray-600">Use the DynamicForm component with your form ID - it handles everything else automatically!</p> <div class="mt-2 bg-gray-100 p-3 rounded text-sm font-mono">
&lt;DynamicForm formId="your-form-id" redirectUrl="/thank-you" /&gt;
</div> </div> </div> <div class="flex items-start space-x-4"> <div class="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
4
</div> <div> <h3 class="font-semibold text-gray-900">Test & Deploy</h3> <p class="text-gray-600">Test the form locally, then it's ready for production. The form will automatically adapt to any Google Form changes!</p> </div> </div> </div> </div> </div> </main> ` })}`;
}, "/Users/joey/Desktop/ProgClubSite-1/src/pages/admin/forms.astro", void 0);

const $$file = "/Users/joey/Desktop/ProgClubSite-1/src/pages/admin/forms.astro";
const $$url = "/admin/forms";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Forms,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
