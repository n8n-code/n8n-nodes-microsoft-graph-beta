import type { INodeProperties } from 'n8n-workflow';

export const sitesOnenoteDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					]
				}
			},
			"options": [
				{
					"name": "Sites Delete Onenote",
					"value": "Sites Delete Onenote",
					"action": "Delete navigation property onenote for sites",
					"description": "Delete navigation property onenote for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote"
						}
					}
				},
				{
					"name": "Sites Get Onenote",
					"value": "Sites Get Onenote",
					"action": "Get onenote from sites",
					"description": "Get onenote from sites",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote"
						}
					}
				},
				{
					"name": "Sites Update Onenote",
					"value": "Sites Update Onenote",
					"action": "Update the navigation property onenote in sites",
					"description": "Update the navigation property onenote in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote"
						}
					}
				},
				{
					"name": "Sites Onenote List Notebooks",
					"value": "Sites Onenote List Notebooks",
					"action": "List notebooks",
					"description": "Retrieve a list of notebook objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks"
						}
					}
				},
				{
					"name": "Sites Onenote Create Notebooks",
					"value": "Sites Onenote Create Notebooks",
					"action": "Create notebook",
					"description": "Create a new OneNote notebook.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks"
						}
					}
				},
				{
					"name": "Sites Onenote Delete Notebooks",
					"value": "Sites Onenote Delete Notebooks",
					"action": "Delete navigation property notebooks for sites",
					"description": "Delete navigation property notebooks for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Onenote Get Notebooks",
					"value": "Sites Onenote Get Notebooks",
					"action": "Get notebooks from sites",
					"description": "The collection of OneNote notebooks that are owned by the user or group. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Onenote Update Notebooks",
					"value": "Sites Onenote Update Notebooks",
					"action": "Update the navigation property notebooks in sites",
					"description": "Update the navigation property notebooks in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Onenote Notebooks List Section Groups",
					"value": "Sites Onenote Notebooks List Section Groups",
					"action": "List sectionGroups",
					"description": "Retrieve a list of section groups from the specified notebook.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups"
						}
					}
				},
				{
					"name": "Sites Onenote Notebooks Create Section Groups",
					"value": "Sites Onenote Notebooks Create Section Groups",
					"action": "Create sectionGroup",
					"description": "Create a new section group in the specified notebook.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups"
						}
					}
				},
				{
					"name": "Sites Onenote Notebooks Delete Section Groups",
					"value": "Sites Onenote Notebooks Delete Section Groups",
					"action": "Delete navigation property sectionGroups for sites",
					"description": "Delete navigation property sectionGroups for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Onenote Notebooks Get Section Groups",
					"value": "Sites Onenote Notebooks Get Section Groups",
					"action": "Get sectionGroups from sites",
					"description": "The section groups in the notebook. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Onenote Notebooks Update Section Groups",
					"value": "Sites Onenote Notebooks Update Section Groups",
					"action": "Update the navigation property sectionGroups in sites",
					"description": "Update the navigation property sectionGroups in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Onenote Notebooks Section Groups Get Parent Notebook",
					"value": "Sites Onenote Notebooks Section Groups Get Parent Notebook",
					"action": "Get parentNotebook from sites",
					"description": "The notebook that contains the section group. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/parentNotebook"
						}
					}
				},
				{
					"name": "Sites Onenote Notebooks Section Groups Get Parent Section Group",
					"value": "Sites Onenote Notebooks Section Groups Get Parent Section Group",
					"action": "Get parentSectionGroup from sites",
					"description": "The section group that contains the section group. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/parentSectionGroup"
						}
					}
				},
				{
					"name": "Sites Onenote Notebooks Section Groups List Section Groups",
					"value": "Sites Onenote Notebooks Section Groups List Section Groups",
					"action": "List sectionGroups",
					"description": "Retrieve a list of section groups from the specified section group.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sectionGroups"
						}
					}
				},
				{
					"name": "Sites Onenote Notebooks Section Groups Get Section Groups",
					"value": "Sites Onenote Notebooks Section Groups Get Section Groups",
					"action": "Get sectionGroups from sites",
					"description": "The section groups in the section. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id1\"]}}"
						}
					}
				},
				{
					"name": "Sites Onenote Notebooks Section Groups List Sections",
					"value": "Sites Onenote Notebooks Section Groups List Sections",
					"action": "List sections",
					"description": "Retrieve a list of onenoteSection objects from the specified section group.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections"
						}
					}
				},
				{
					"name": "Sites Onenote Notebooks Section Groups Create Sections",
					"value": "Sites Onenote Notebooks Section Groups Create Sections",
					"action": "Create section",
					"description": "Create a new section in the specified section group.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections"
						}
					}
				},
				{
					"name": "Sites Onenote Notebooks Section Groups Delete Sections",
					"value": "Sites Onenote Notebooks Section Groups Delete Sections",
					"action": "Delete navigation property sections for sites",
					"description": "Delete navigation property sections for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Onenote Notebooks Section Groups Get Sections",
					"value": "Sites Onenote Notebooks Section Groups Get Sections",
					"action": "Get sections from sites",
					"description": "The sections in the section group. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Onenote Notebooks Section Groups Update Sections",
					"value": "Sites Onenote Notebooks Section Groups Update Sections",
					"action": "Update the navigation property sections in sites",
					"description": "Update the navigation property sections in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Onenote Notebooks Section Groups Sections List Pages",
					"value": "Sites Onenote Notebooks Section Groups Sections List Pages",
					"action": "Get pages from sites",
					"description": "The collection of pages in the section.  Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages"
						}
					}
				},
				{
					"name": "Sites Onenote Notebooks Section Groups Sections Create Pages",
					"value": "Sites Onenote Notebooks Section Groups Sections Create Pages",
					"action": "Create new navigation property to pages for sites",
					"description": "Create new navigation property to pages for sites",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages"
						}
					}
				},
				{
					"name": "Sites Onenote Notebooks Section Groups Sections Delete Pages",
					"value": "Sites Onenote Notebooks Section Groups Sections Delete Pages",
					"action": "Delete navigation property pages for sites",
					"description": "Delete navigation property pages for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Onenote Notebooks Section Groups Sections Get Pages",
					"value": "Sites Onenote Notebooks Section Groups Sections Get Pages",
					"action": "Get pages from sites",
					"description": "The collection of pages in the section.  Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Onenote Notebooks Section Groups Sections Update Pages",
					"value": "Sites Onenote Notebooks Section Groups Sections Update Pages",
					"action": "Update the navigation property pages in sites",
					"description": "Update the navigation property pages in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Onenote Notebooks Section Groups Sections Get Pages Content",
					"value": "Sites Onenote Notebooks Section Groups Sections Get Pages Content",
					"action": "Get content for the navigation property pages from sites",
					"description": "The page's HTML content.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/content"
						}
					}
				},
				{
					"name": "Sites Onenote Notebooks Section Groups Sections Update Pages Content",
					"value": "Sites Onenote Notebooks Section Groups Sections Update Pages Content",
					"action": "Update content for the navigation property pages in sites",
					"description": "The page's HTML content.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/content"
						}
					}
				},
				{
					"name": "Sites Onenote Notebooks Section Groups Sections Pages Get Parent Notebook",
					"value": "Sites Onenote Notebooks Section Groups Sections Pages Get Parent Notebook",
					"action": "Get parentNotebook from sites",
					"description": "The notebook that contains the page.  Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/parentNotebook"
						}
					}
				},
				{
					"name": "Sites Onenote Notebooks Section Groups Sections Pages Get Parent Section",
					"value": "Sites Onenote Notebooks Section Groups Sections Pages Get Parent Section",
					"action": "Get parentSection from sites",
					"description": "The section that contains the page. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/parentSection"
						}
					}
				},
				{
					"name": "Sites Onenote Notebooks Section Groups Sections Get Parent Notebook",
					"value": "Sites Onenote Notebooks Section Groups Sections Get Parent Notebook",
					"action": "Get parentNotebook from sites",
					"description": "The notebook that contains the section.  Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/parentNotebook"
						}
					}
				},
				{
					"name": "Sites Onenote Notebooks Section Groups Sections Get Parent Section Group",
					"value": "Sites Onenote Notebooks Section Groups Sections Get Parent Section Group",
					"action": "Get parentSectionGroup from sites",
					"description": "The section group that contains the section.  Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/parentSectionGroup"
						}
					}
				},
				{
					"name": "Sites Onenote Notebooks List Sections",
					"value": "Sites Onenote Notebooks List Sections",
					"action": "List sections",
					"description": "Retrieve a list of section objects from the specified notebook.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections"
						}
					}
				},
				{
					"name": "Sites Onenote Notebooks Create Sections",
					"value": "Sites Onenote Notebooks Create Sections",
					"action": "Create section",
					"description": "Create a new section in the specified notebook.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections"
						}
					}
				},
				{
					"name": "Sites Onenote Notebooks Delete Sections",
					"value": "Sites Onenote Notebooks Delete Sections",
					"action": "Delete navigation property sections for sites",
					"description": "Delete navigation property sections for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Onenote Notebooks Get Sections",
					"value": "Sites Onenote Notebooks Get Sections",
					"action": "Get sections from sites",
					"description": "The sections in the notebook. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Onenote Notebooks Update Sections",
					"value": "Sites Onenote Notebooks Update Sections",
					"action": "Update the navigation property sections in sites",
					"description": "Update the navigation property sections in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Onenote Notebooks Sections List Pages",
					"value": "Sites Onenote Notebooks Sections List Pages",
					"action": "Get pages from sites",
					"description": "The collection of pages in the section.  Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages"
						}
					}
				},
				{
					"name": "Sites Onenote Notebooks Sections Create Pages",
					"value": "Sites Onenote Notebooks Sections Create Pages",
					"action": "Create new navigation property to pages for sites",
					"description": "Create new navigation property to pages for sites",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages"
						}
					}
				},
				{
					"name": "Sites Onenote Notebooks Sections Delete Pages",
					"value": "Sites Onenote Notebooks Sections Delete Pages",
					"action": "Delete navigation property pages for sites",
					"description": "Delete navigation property pages for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Onenote Notebooks Sections Get Pages",
					"value": "Sites Onenote Notebooks Sections Get Pages",
					"action": "Get pages from sites",
					"description": "The collection of pages in the section.  Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Onenote Notebooks Sections Update Pages",
					"value": "Sites Onenote Notebooks Sections Update Pages",
					"action": "Update the navigation property pages in sites",
					"description": "Update the navigation property pages in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Onenote Notebooks Sections Get Pages Content",
					"value": "Sites Onenote Notebooks Sections Get Pages Content",
					"action": "Get content for the navigation property pages from sites",
					"description": "The page's HTML content.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/content"
						}
					}
				},
				{
					"name": "Sites Onenote Notebooks Sections Update Pages Content",
					"value": "Sites Onenote Notebooks Sections Update Pages Content",
					"action": "Update content for the navigation property pages in sites",
					"description": "The page's HTML content.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/content"
						}
					}
				},
				{
					"name": "Sites Onenote Notebooks Sections Pages Get Parent Notebook",
					"value": "Sites Onenote Notebooks Sections Pages Get Parent Notebook",
					"action": "Get parentNotebook from sites",
					"description": "The notebook that contains the page.  Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/parentNotebook"
						}
					}
				},
				{
					"name": "Sites Onenote Notebooks Sections Pages Get Parent Section",
					"value": "Sites Onenote Notebooks Sections Pages Get Parent Section",
					"action": "Get parentSection from sites",
					"description": "The section that contains the page. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/parentSection"
						}
					}
				},
				{
					"name": "Sites Onenote Notebooks Sections Get Parent Notebook",
					"value": "Sites Onenote Notebooks Sections Get Parent Notebook",
					"action": "Get parentNotebook from sites",
					"description": "The notebook that contains the section.  Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/parentNotebook"
						}
					}
				},
				{
					"name": "Sites Onenote Notebooks Sections Get Parent Section Group",
					"value": "Sites Onenote Notebooks Sections Get Parent Section Group",
					"action": "Get parentSectionGroup from sites",
					"description": "The section group that contains the section.  Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/parentSectionGroup"
						}
					}
				},
				{
					"name": "Sites Onenote List Operations",
					"value": "Sites Onenote List Operations",
					"action": "Get operations from sites",
					"description": "The status of OneNote operations. Getting an operations collection is not supported, but you can get the status of long-running operations if the Operation-Location header is returned in the response. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/operations"
						}
					}
				},
				{
					"name": "Sites Onenote Create Operations",
					"value": "Sites Onenote Create Operations",
					"action": "Create new navigation property to operations for sites",
					"description": "Create new navigation property to operations for sites",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/operations"
						}
					}
				},
				{
					"name": "Sites Onenote Delete Operations",
					"value": "Sites Onenote Delete Operations",
					"action": "Delete navigation property operations for sites",
					"description": "Delete navigation property operations for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/operations/{{$parameter[\"onenoteOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Onenote Get Operations",
					"value": "Sites Onenote Get Operations",
					"action": "Get operations from sites",
					"description": "The status of OneNote operations. Getting an operations collection is not supported, but you can get the status of long-running operations if the Operation-Location header is returned in the response. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/operations/{{$parameter[\"onenoteOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Onenote Update Operations",
					"value": "Sites Onenote Update Operations",
					"action": "Update the navigation property operations in sites",
					"description": "Update the navigation property operations in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/operations/{{$parameter[\"onenoteOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Onenote List Pages",
					"value": "Sites Onenote List Pages",
					"action": "Get pages from sites",
					"description": "The pages in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/pages"
						}
					}
				},
				{
					"name": "Sites Onenote Create Pages",
					"value": "Sites Onenote Create Pages",
					"action": "Create new navigation property to pages for sites",
					"description": "Create new navigation property to pages for sites",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/pages"
						}
					}
				},
				{
					"name": "Sites Onenote Delete Pages",
					"value": "Sites Onenote Delete Pages",
					"action": "Delete navigation property pages for sites",
					"description": "Delete navigation property pages for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Onenote Get Pages",
					"value": "Sites Onenote Get Pages",
					"action": "Get pages from sites",
					"description": "The pages in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Onenote Update Pages",
					"value": "Sites Onenote Update Pages",
					"action": "Update the navigation property pages in sites",
					"description": "Update the navigation property pages in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Onenote Get Pages Content",
					"value": "Sites Onenote Get Pages Content",
					"action": "Get content for the navigation property pages from sites",
					"description": "The page's HTML content.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/pages/{{$parameter[\"onenotePage-id\"]}}/content"
						}
					}
				},
				{
					"name": "Sites Onenote Update Pages Content",
					"value": "Sites Onenote Update Pages Content",
					"action": "Update content for the navigation property pages in sites",
					"description": "The page's HTML content.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/pages/{{$parameter[\"onenotePage-id\"]}}/content"
						}
					}
				},
				{
					"name": "Sites Onenote Pages Get Parent Notebook",
					"value": "Sites Onenote Pages Get Parent Notebook",
					"action": "Get parentNotebook from sites",
					"description": "The notebook that contains the page.  Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/pages/{{$parameter[\"onenotePage-id\"]}}/parentNotebook"
						}
					}
				},
				{
					"name": "Sites Onenote Pages Get Parent Section",
					"value": "Sites Onenote Pages Get Parent Section",
					"action": "Get parentSection from sites",
					"description": "The section that contains the page. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/pages/{{$parameter[\"onenotePage-id\"]}}/parentSection"
						}
					}
				},
				{
					"name": "Sites Onenote List Resources",
					"value": "Sites Onenote List Resources",
					"action": "Get resources from sites",
					"description": "The image and other file resources in OneNote pages. Getting a resources collection is not supported, but you can get the binary content of a specific resource. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/resources"
						}
					}
				},
				{
					"name": "Sites Onenote Create Resources",
					"value": "Sites Onenote Create Resources",
					"action": "Create new navigation property to resources for sites",
					"description": "Create new navigation property to resources for sites",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/resources"
						}
					}
				},
				{
					"name": "Sites Onenote Delete Resources",
					"value": "Sites Onenote Delete Resources",
					"action": "Delete navigation property resources for sites",
					"description": "Delete navigation property resources for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/resources/{{$parameter[\"onenoteResource-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Onenote Get Resources",
					"value": "Sites Onenote Get Resources",
					"action": "Get resources from sites",
					"description": "The image and other file resources in OneNote pages. Getting a resources collection is not supported, but you can get the binary content of a specific resource. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/resources/{{$parameter[\"onenoteResource-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Onenote Update Resources",
					"value": "Sites Onenote Update Resources",
					"action": "Update the navigation property resources in sites",
					"description": "Update the navigation property resources in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/resources/{{$parameter[\"onenoteResource-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Onenote Get Resources Content",
					"value": "Sites Onenote Get Resources Content",
					"action": "Get content for the navigation property resources from sites",
					"description": "Get content for the navigation property resources from sites",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/resources/{{$parameter[\"onenoteResource-id\"]}}/content"
						}
					}
				},
				{
					"name": "Sites Onenote Update Resources Content",
					"value": "Sites Onenote Update Resources Content",
					"action": "Update content for the navigation property resources in sites",
					"description": "Update content for the navigation property resources in sites",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/resources/{{$parameter[\"onenoteResource-id\"]}}/content"
						}
					}
				},
				{
					"name": "Sites Onenote List Section Groups",
					"value": "Sites Onenote List Section Groups",
					"action": "List sectionGroups",
					"description": "Retrieve a list of sectionGroup objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/sectionGroups"
						}
					}
				},
				{
					"name": "Sites Onenote Create Section Groups",
					"value": "Sites Onenote Create Section Groups",
					"action": "Create new navigation property to sectionGroups for sites",
					"description": "Create new navigation property to sectionGroups for sites",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/sectionGroups"
						}
					}
				},
				{
					"name": "Sites Onenote Delete Section Groups",
					"value": "Sites Onenote Delete Section Groups",
					"action": "Delete navigation property sectionGroups for sites",
					"description": "Delete navigation property sectionGroups for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Onenote Get Section Groups",
					"value": "Sites Onenote Get Section Groups",
					"action": "Get sectionGroups from sites",
					"description": "The section groups in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Onenote Update Section Groups",
					"value": "Sites Onenote Update Section Groups",
					"action": "Update the navigation property sectionGroups in sites",
					"description": "Update the navigation property sectionGroups in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Onenote Section Groups Get Parent Notebook",
					"value": "Sites Onenote Section Groups Get Parent Notebook",
					"action": "Get parentNotebook from sites",
					"description": "The notebook that contains the section group. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/parentNotebook"
						}
					}
				},
				{
					"name": "Sites Onenote Section Groups Get Parent Section Group",
					"value": "Sites Onenote Section Groups Get Parent Section Group",
					"action": "Get parentSectionGroup from sites",
					"description": "The section group that contains the section group. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/parentSectionGroup"
						}
					}
				},
				{
					"name": "Sites Onenote Section Groups List Section Groups",
					"value": "Sites Onenote Section Groups List Section Groups",
					"action": "List sectionGroups",
					"description": "Retrieve a list of section groups from the specified section group.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sectionGroups"
						}
					}
				},
				{
					"name": "Sites Onenote Section Groups Get Section Groups",
					"value": "Sites Onenote Section Groups Get Section Groups",
					"action": "Get sectionGroups from sites",
					"description": "The section groups in the section. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id1\"]}}"
						}
					}
				},
				{
					"name": "Sites Onenote Section Groups List Sections",
					"value": "Sites Onenote Section Groups List Sections",
					"action": "List sections",
					"description": "Retrieve a list of onenoteSection objects from the specified section group.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections"
						}
					}
				},
				{
					"name": "Sites Onenote Section Groups Create Sections",
					"value": "Sites Onenote Section Groups Create Sections",
					"action": "Create section",
					"description": "Create a new section in the specified section group.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections"
						}
					}
				},
				{
					"name": "Sites Onenote Section Groups Delete Sections",
					"value": "Sites Onenote Section Groups Delete Sections",
					"action": "Delete navigation property sections for sites",
					"description": "Delete navigation property sections for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Onenote Section Groups Get Sections",
					"value": "Sites Onenote Section Groups Get Sections",
					"action": "Get sections from sites",
					"description": "The sections in the section group. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Onenote Section Groups Update Sections",
					"value": "Sites Onenote Section Groups Update Sections",
					"action": "Update the navigation property sections in sites",
					"description": "Update the navigation property sections in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Onenote Section Groups Sections List Pages",
					"value": "Sites Onenote Section Groups Sections List Pages",
					"action": "Get pages from sites",
					"description": "The collection of pages in the section.  Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages"
						}
					}
				},
				{
					"name": "Sites Onenote Section Groups Sections Create Pages",
					"value": "Sites Onenote Section Groups Sections Create Pages",
					"action": "Create new navigation property to pages for sites",
					"description": "Create new navigation property to pages for sites",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages"
						}
					}
				},
				{
					"name": "Sites Onenote Section Groups Sections Delete Pages",
					"value": "Sites Onenote Section Groups Sections Delete Pages",
					"action": "Delete navigation property pages for sites",
					"description": "Delete navigation property pages for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Onenote Section Groups Sections Get Pages",
					"value": "Sites Onenote Section Groups Sections Get Pages",
					"action": "Get pages from sites",
					"description": "The collection of pages in the section.  Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Onenote Section Groups Sections Update Pages",
					"value": "Sites Onenote Section Groups Sections Update Pages",
					"action": "Update the navigation property pages in sites",
					"description": "Update the navigation property pages in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Onenote Section Groups Sections Get Pages Content",
					"value": "Sites Onenote Section Groups Sections Get Pages Content",
					"action": "Get content for the navigation property pages from sites",
					"description": "The page's HTML content.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/content"
						}
					}
				},
				{
					"name": "Sites Onenote Section Groups Sections Update Pages Content",
					"value": "Sites Onenote Section Groups Sections Update Pages Content",
					"action": "Update content for the navigation property pages in sites",
					"description": "The page's HTML content.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/content"
						}
					}
				},
				{
					"name": "Sites Onenote Section Groups Sections Pages Get Parent Notebook",
					"value": "Sites Onenote Section Groups Sections Pages Get Parent Notebook",
					"action": "Get parentNotebook from sites",
					"description": "The notebook that contains the page.  Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/parentNotebook"
						}
					}
				},
				{
					"name": "Sites Onenote Section Groups Sections Pages Get Parent Section",
					"value": "Sites Onenote Section Groups Sections Pages Get Parent Section",
					"action": "Get parentSection from sites",
					"description": "The section that contains the page. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/parentSection"
						}
					}
				},
				{
					"name": "Sites Onenote Section Groups Sections Get Parent Notebook",
					"value": "Sites Onenote Section Groups Sections Get Parent Notebook",
					"action": "Get parentNotebook from sites",
					"description": "The notebook that contains the section.  Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/parentNotebook"
						}
					}
				},
				{
					"name": "Sites Onenote Section Groups Sections Get Parent Section Group",
					"value": "Sites Onenote Section Groups Sections Get Parent Section Group",
					"action": "Get parentSectionGroup from sites",
					"description": "The section group that contains the section.  Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/parentSectionGroup"
						}
					}
				},
				{
					"name": "Sites Onenote List Sections",
					"value": "Sites Onenote List Sections",
					"action": "List sections",
					"description": "Retrieve a list of section objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/sections"
						}
					}
				},
				{
					"name": "Sites Onenote Create Sections",
					"value": "Sites Onenote Create Sections",
					"action": "Create new navigation property to sections for sites",
					"description": "Create new navigation property to sections for sites",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/sections"
						}
					}
				},
				{
					"name": "Sites Onenote Delete Sections",
					"value": "Sites Onenote Delete Sections",
					"action": "Delete navigation property sections for sites",
					"description": "Delete navigation property sections for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Onenote Get Sections",
					"value": "Sites Onenote Get Sections",
					"action": "Get sections from sites",
					"description": "The sections in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Onenote Update Sections",
					"value": "Sites Onenote Update Sections",
					"action": "Update the navigation property sections in sites",
					"description": "Update the navigation property sections in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Onenote Sections List Pages",
					"value": "Sites Onenote Sections List Pages",
					"action": "Get pages from sites",
					"description": "The collection of pages in the section.  Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}/pages"
						}
					}
				},
				{
					"name": "Sites Onenote Sections Create Pages",
					"value": "Sites Onenote Sections Create Pages",
					"action": "Create new navigation property to pages for sites",
					"description": "Create new navigation property to pages for sites",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}/pages"
						}
					}
				},
				{
					"name": "Sites Onenote Sections Delete Pages",
					"value": "Sites Onenote Sections Delete Pages",
					"action": "Delete navigation property pages for sites",
					"description": "Delete navigation property pages for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Onenote Sections Get Pages",
					"value": "Sites Onenote Sections Get Pages",
					"action": "Get pages from sites",
					"description": "The collection of pages in the section.  Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Onenote Sections Update Pages",
					"value": "Sites Onenote Sections Update Pages",
					"action": "Update the navigation property pages in sites",
					"description": "Update the navigation property pages in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Onenote Sections Get Pages Content",
					"value": "Sites Onenote Sections Get Pages Content",
					"action": "Get content for the navigation property pages from sites",
					"description": "The page's HTML content.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/content"
						}
					}
				},
				{
					"name": "Sites Onenote Sections Update Pages Content",
					"value": "Sites Onenote Sections Update Pages Content",
					"action": "Update content for the navigation property pages in sites",
					"description": "The page's HTML content.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/content"
						}
					}
				},
				{
					"name": "Sites Onenote Sections Pages Get Parent Notebook",
					"value": "Sites Onenote Sections Pages Get Parent Notebook",
					"action": "Get parentNotebook from sites",
					"description": "The notebook that contains the page.  Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/parentNotebook"
						}
					}
				},
				{
					"name": "Sites Onenote Sections Pages Get Parent Section",
					"value": "Sites Onenote Sections Pages Get Parent Section",
					"action": "Get parentSection from sites",
					"description": "The section that contains the page. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/parentSection"
						}
					}
				},
				{
					"name": "Sites Onenote Sections Get Parent Notebook",
					"value": "Sites Onenote Sections Get Parent Notebook",
					"action": "Get parentNotebook from sites",
					"description": "The notebook that contains the section.  Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}/parentNotebook"
						}
					}
				},
				{
					"name": "Sites Onenote Sections Get Parent Section Group",
					"value": "Sites Onenote Sections Get Parent Section Group",
					"action": "Get parentSectionGroup from sites",
					"description": "The section group that contains the section.  Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}/parentSectionGroup"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /sites/{site-id}/onenote",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Delete Onenote"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Delete Onenote"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Get Onenote"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Get Onenote"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Get Onenote"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/onenote",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Update Onenote"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/onenote<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Update Onenote"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/notebooks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote List Notebooks"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote List Notebooks"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote List Notebooks"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote List Notebooks"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote List Notebooks"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote List Notebooks"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote List Notebooks"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote List Notebooks"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote List Notebooks"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/onenote/notebooks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Create Notebooks"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/onenote/notebooks<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Create Notebooks"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/onenote/notebooks/{notebook-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Delete Notebooks"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Delete Notebooks"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/notebooks/{notebook-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Get Notebooks"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Get Notebooks"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Get Notebooks"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/onenote/notebooks/{notebook-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Update Notebooks"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/onenote/notebooks/{notebook-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Update Notebooks"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks List Section Groups"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks List Section Groups"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks List Section Groups"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks List Section Groups"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks List Section Groups"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks List Section Groups"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks List Section Groups"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks List Section Groups"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks List Section Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Create Section Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Create Section Groups"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Delete Section Groups"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Delete Section Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Get Section Groups"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Get Section Groups"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Get Section Groups"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Update Section Groups"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Update Section Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/parentNotebook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/parentSectionGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups Get Parent Section Group"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups Get Parent Section Group"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups Get Parent Section Group"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sectionGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups List Section Groups"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups List Section Groups"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups List Section Groups"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups List Section Groups"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups List Section Groups"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups List Section Groups"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups List Section Groups"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups List Section Groups"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups List Section Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sectionGroups/{sectionGroup-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups Get Section Groups"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups Get Section Groups"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups Get Section Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups List Sections"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups List Sections"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups List Sections"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups List Sections"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups List Sections"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups List Sections"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups List Sections"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups List Sections"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups List Sections"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups Create Sections"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups Create Sections"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups Delete Sections"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups Delete Sections"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups Get Sections"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups Get Sections"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups Get Sections"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups Update Sections"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups Update Sections"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups Sections List Pages"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups Sections List Pages"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups Sections List Pages"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups Sections List Pages"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups Sections List Pages"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups Sections List Pages"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups Sections List Pages"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups Sections List Pages"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups Sections List Pages"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups Sections Create Pages"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups Sections Create Pages"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups Sections Delete Pages"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups Sections Delete Pages"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups Sections Get Pages"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups Sections Get Pages"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups Sections Get Pages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups Sections Update Pages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups Sections Update Pages"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups Sections Get Pages Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups Sections Update Pages Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups Sections Update Pages Content"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentNotebook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups Sections Pages Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups Sections Pages Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups Sections Pages Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentSection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups Sections Pages Get Parent Section"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups Sections Pages Get Parent Section"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups Sections Pages Get Parent Section"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentNotebook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups Sections Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups Sections Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups Sections Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentSectionGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups Sections Get Parent Section Group"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups Sections Get Parent Section Group"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Section Groups Sections Get Parent Section Group"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/notebooks/{notebook-id}/sections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks List Sections"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks List Sections"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks List Sections"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks List Sections"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks List Sections"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks List Sections"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks List Sections"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks List Sections"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks List Sections"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/onenote/notebooks/{notebook-id}/sections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Create Sections"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/onenote/notebooks/{notebook-id}/sections<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Create Sections"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Delete Sections"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Delete Sections"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Get Sections"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Get Sections"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Get Sections"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Update Sections"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Update Sections"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Sections List Pages"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Sections List Pages"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Sections List Pages"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Sections List Pages"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Sections List Pages"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Sections List Pages"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Sections List Pages"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Sections List Pages"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Sections List Pages"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Sections Create Pages"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Sections Create Pages"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Sections Delete Pages"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Sections Delete Pages"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Sections Get Pages"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Sections Get Pages"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Sections Get Pages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Sections Update Pages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Sections Update Pages"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Sections Get Pages Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /sites/{site-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Sections Update Pages Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /sites/{site-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Sections Update Pages Content"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentNotebook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Sections Pages Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Sections Pages Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Sections Pages Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentSection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Sections Pages Get Parent Section"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Sections Pages Get Parent Section"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Sections Pages Get Parent Section"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/parentNotebook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Sections Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Sections Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Sections Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/parentSectionGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Sections Get Parent Section Group"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Sections Get Parent Section Group"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Notebooks Sections Get Parent Section Group"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/operations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote List Operations"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote List Operations"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote List Operations"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote List Operations"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote List Operations"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote List Operations"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote List Operations"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote List Operations"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote List Operations"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/onenote/operations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Create Operations"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/onenote/operations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Create Operations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/onenote/operations/{onenoteOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Delete Operations"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Delete Operations"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/operations/{onenoteOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Get Operations"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Get Operations"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Get Operations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/onenote/operations/{onenoteOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Update Operations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/onenote/operations/{onenoteOperation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Update Operations"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/pages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote List Pages"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote List Pages"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote List Pages"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote List Pages"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote List Pages"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote List Pages"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote List Pages"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote List Pages"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote List Pages"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/onenote/pages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Create Pages"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/onenote/pages<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Create Pages"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/onenote/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Delete Pages"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Delete Pages"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Get Pages"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Get Pages"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Get Pages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/onenote/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Update Pages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/onenote/pages/{onenotePage-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Update Pages"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/pages/{onenotePage-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Get Pages Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /sites/{site-id}/onenote/pages/{onenotePage-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Update Pages Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /sites/{site-id}/onenote/pages/{onenotePage-id}/content<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Update Pages Content"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/pages/{onenotePage-id}/parentNotebook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Pages Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Pages Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Pages Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/pages/{onenotePage-id}/parentSection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Pages Get Parent Section"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Pages Get Parent Section"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Pages Get Parent Section"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/resources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote List Resources"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote List Resources"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote List Resources"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote List Resources"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote List Resources"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote List Resources"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote List Resources"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote List Resources"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote List Resources"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/onenote/resources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Create Resources"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/onenote/resources<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Create Resources"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/onenote/resources/{onenoteResource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Delete Resources"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Delete Resources"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/resources/{onenoteResource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Get Resources"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Get Resources"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Get Resources"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/onenote/resources/{onenoteResource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Update Resources"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/onenote/resources/{onenoteResource-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Update Resources"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/resources/{onenoteResource-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Get Resources Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /sites/{site-id}/onenote/resources/{onenoteResource-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Update Resources Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /sites/{site-id}/onenote/resources/{onenoteResource-id}/content<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Update Resources Content"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/sectionGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote List Section Groups"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote List Section Groups"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote List Section Groups"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote List Section Groups"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote List Section Groups"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote List Section Groups"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote List Section Groups"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote List Section Groups"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote List Section Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/onenote/sectionGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Create Section Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/onenote/sectionGroups<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Create Section Groups"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Delete Section Groups"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Delete Section Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Get Section Groups"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Get Section Groups"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Get Section Groups"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Update Section Groups"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Update Section Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/parentNotebook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/parentSectionGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups Get Parent Section Group"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups Get Parent Section Group"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups Get Parent Section Group"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sectionGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups List Section Groups"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups List Section Groups"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups List Section Groups"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups List Section Groups"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups List Section Groups"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups List Section Groups"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups List Section Groups"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups List Section Groups"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups List Section Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sectionGroups/{sectionGroup-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups Get Section Groups"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups Get Section Groups"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups Get Section Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups List Sections"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups List Sections"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups List Sections"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups List Sections"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups List Sections"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups List Sections"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups List Sections"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups List Sections"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups List Sections"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups Create Sections"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups Create Sections"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups Delete Sections"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups Delete Sections"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups Get Sections"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups Get Sections"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups Get Sections"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups Update Sections"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups Update Sections"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups Sections List Pages"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups Sections List Pages"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups Sections List Pages"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups Sections List Pages"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups Sections List Pages"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups Sections List Pages"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups Sections List Pages"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups Sections List Pages"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups Sections List Pages"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups Sections Create Pages"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups Sections Create Pages"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups Sections Delete Pages"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups Sections Delete Pages"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups Sections Get Pages"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups Sections Get Pages"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups Sections Get Pages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups Sections Update Pages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups Sections Update Pages"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups Sections Get Pages Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups Sections Update Pages Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups Sections Update Pages Content"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentNotebook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups Sections Pages Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups Sections Pages Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups Sections Pages Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentSection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups Sections Pages Get Parent Section"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups Sections Pages Get Parent Section"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups Sections Pages Get Parent Section"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentNotebook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups Sections Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups Sections Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups Sections Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentSectionGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups Sections Get Parent Section Group"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups Sections Get Parent Section Group"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Section Groups Sections Get Parent Section Group"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/sections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote List Sections"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote List Sections"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote List Sections"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote List Sections"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote List Sections"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote List Sections"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote List Sections"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote List Sections"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote List Sections"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/onenote/sections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Create Sections"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/onenote/sections<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Create Sections"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/onenote/sections/{onenoteSection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Delete Sections"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Delete Sections"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/sections/{onenoteSection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Get Sections"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Get Sections"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Get Sections"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/onenote/sections/{onenoteSection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Update Sections"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/onenote/sections/{onenoteSection-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Update Sections"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/sections/{onenoteSection-id}/pages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Sections List Pages"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Sections List Pages"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Sections List Pages"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Sections List Pages"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Sections List Pages"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Sections List Pages"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Sections List Pages"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Sections List Pages"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Sections List Pages"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/onenote/sections/{onenoteSection-id}/pages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Sections Create Pages"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/onenote/sections/{onenoteSection-id}/pages<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Sections Create Pages"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Sections Delete Pages"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Sections Delete Pages"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Sections Get Pages"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Sections Get Pages"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Sections Get Pages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Sections Update Pages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Sections Update Pages"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Sections Get Pages Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /sites/{site-id}/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Sections Update Pages Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /sites/{site-id}/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}/content<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Sections Update Pages Content"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentNotebook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Sections Pages Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Sections Pages Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Sections Pages Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentSection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Sections Pages Get Parent Section"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Sections Pages Get Parent Section"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Sections Pages Get Parent Section"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/sections/{onenoteSection-id}/parentNotebook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Sections Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Sections Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Sections Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/sections/{onenoteSection-id}/parentSectionGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Sections Get Parent Section Group"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Sections Get Parent Section Group"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Onenote"
					],
					"operation": [
						"Sites Onenote Sections Get Parent Section Group"
					]
				}
			}
		},
];
