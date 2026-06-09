import type { INodeProperties } from 'n8n-workflow';

export const groupsOnenoteDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					]
				}
			},
			"options": [
				{
					"name": "Groups Delete Onenote",
					"value": "Groups Delete Onenote",
					"action": "Delete navigation property onenote for groups",
					"description": "Delete navigation property onenote for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote"
						}
					}
				},
				{
					"name": "Groups Get Onenote",
					"value": "Groups Get Onenote",
					"action": "Get onenote from groups",
					"description": "Get onenote from groups",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote"
						}
					}
				},
				{
					"name": "Groups Update Onenote",
					"value": "Groups Update Onenote",
					"action": "Update the navigation property onenote in groups",
					"description": "Update the navigation property onenote in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote"
						}
					}
				},
				{
					"name": "Groups Onenote List Notebooks",
					"value": "Groups Onenote List Notebooks",
					"action": "List notebooks",
					"description": "Retrieve a list of notebook objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/notebooks"
						}
					}
				},
				{
					"name": "Groups Onenote Create Notebooks",
					"value": "Groups Onenote Create Notebooks",
					"action": "Create notebook",
					"description": "Create a new OneNote notebook.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/notebooks"
						}
					}
				},
				{
					"name": "Groups Onenote Delete Notebooks",
					"value": "Groups Onenote Delete Notebooks",
					"action": "Delete navigation property notebooks for groups",
					"description": "Delete navigation property notebooks for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Onenote Get Notebooks",
					"value": "Groups Onenote Get Notebooks",
					"action": "Get notebooks from groups",
					"description": "The collection of OneNote notebooks that are owned by the user or group. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Onenote Update Notebooks",
					"value": "Groups Onenote Update Notebooks",
					"action": "Update the navigation property notebooks in groups",
					"description": "Update the navigation property notebooks in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Onenote Notebooks List Section Groups",
					"value": "Groups Onenote Notebooks List Section Groups",
					"action": "List sectionGroups",
					"description": "Retrieve a list of section groups from the specified notebook.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups"
						}
					}
				},
				{
					"name": "Groups Onenote Notebooks Create Section Groups",
					"value": "Groups Onenote Notebooks Create Section Groups",
					"action": "Create sectionGroup",
					"description": "Create a new section group in the specified notebook.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups"
						}
					}
				},
				{
					"name": "Groups Onenote Notebooks Delete Section Groups",
					"value": "Groups Onenote Notebooks Delete Section Groups",
					"action": "Delete navigation property sectionGroups for groups",
					"description": "Delete navigation property sectionGroups for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Onenote Notebooks Get Section Groups",
					"value": "Groups Onenote Notebooks Get Section Groups",
					"action": "Get sectionGroups from groups",
					"description": "The section groups in the notebook. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Onenote Notebooks Update Section Groups",
					"value": "Groups Onenote Notebooks Update Section Groups",
					"action": "Update the navigation property sectionGroups in groups",
					"description": "Update the navigation property sectionGroups in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Onenote Notebooks Section Groups Get Parent Notebook",
					"value": "Groups Onenote Notebooks Section Groups Get Parent Notebook",
					"action": "Get parentNotebook from groups",
					"description": "The notebook that contains the section group. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/parentNotebook"
						}
					}
				},
				{
					"name": "Groups Onenote Notebooks Section Groups Get Parent Section Group",
					"value": "Groups Onenote Notebooks Section Groups Get Parent Section Group",
					"action": "Get parentSectionGroup from groups",
					"description": "The section group that contains the section group. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/parentSectionGroup"
						}
					}
				},
				{
					"name": "Groups Onenote Notebooks Section Groups List Section Groups",
					"value": "Groups Onenote Notebooks Section Groups List Section Groups",
					"action": "List sectionGroups",
					"description": "Retrieve a list of section groups from the specified section group.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sectionGroups"
						}
					}
				},
				{
					"name": "Groups Onenote Notebooks Section Groups Get Section Groups",
					"value": "Groups Onenote Notebooks Section Groups Get Section Groups",
					"action": "Get sectionGroups from groups",
					"description": "The section groups in the section. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id1\"]}}"
						}
					}
				},
				{
					"name": "Groups Onenote Notebooks Section Groups List Sections",
					"value": "Groups Onenote Notebooks Section Groups List Sections",
					"action": "List sections",
					"description": "Retrieve a list of onenoteSection objects from the specified section group.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections"
						}
					}
				},
				{
					"name": "Groups Onenote Notebooks Section Groups Create Sections",
					"value": "Groups Onenote Notebooks Section Groups Create Sections",
					"action": "Create section",
					"description": "Create a new section in the specified section group.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections"
						}
					}
				},
				{
					"name": "Groups Onenote Notebooks Section Groups Delete Sections",
					"value": "Groups Onenote Notebooks Section Groups Delete Sections",
					"action": "Delete navigation property sections for groups",
					"description": "Delete navigation property sections for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Onenote Notebooks Section Groups Get Sections",
					"value": "Groups Onenote Notebooks Section Groups Get Sections",
					"action": "Get sections from groups",
					"description": "The sections in the section group. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Onenote Notebooks Section Groups Update Sections",
					"value": "Groups Onenote Notebooks Section Groups Update Sections",
					"action": "Update the navigation property sections in groups",
					"description": "Update the navigation property sections in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Onenote Notebooks Section Groups Sections List Pages",
					"value": "Groups Onenote Notebooks Section Groups Sections List Pages",
					"action": "Get pages from groups",
					"description": "The collection of pages in the section.  Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages"
						}
					}
				},
				{
					"name": "Groups Onenote Notebooks Section Groups Sections Create Pages",
					"value": "Groups Onenote Notebooks Section Groups Sections Create Pages",
					"action": "Create new navigation property to pages for groups",
					"description": "Create new navigation property to pages for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages"
						}
					}
				},
				{
					"name": "Groups Onenote Notebooks Section Groups Sections Delete Pages",
					"value": "Groups Onenote Notebooks Section Groups Sections Delete Pages",
					"action": "Delete navigation property pages for groups",
					"description": "Delete navigation property pages for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Onenote Notebooks Section Groups Sections Get Pages",
					"value": "Groups Onenote Notebooks Section Groups Sections Get Pages",
					"action": "Get pages from groups",
					"description": "The collection of pages in the section.  Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Onenote Notebooks Section Groups Sections Update Pages",
					"value": "Groups Onenote Notebooks Section Groups Sections Update Pages",
					"action": "Update the navigation property pages in groups",
					"description": "Update the navigation property pages in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Onenote Notebooks Section Groups Sections Get Pages Content",
					"value": "Groups Onenote Notebooks Section Groups Sections Get Pages Content",
					"action": "Get content for the navigation property pages from groups",
					"description": "The page's HTML content.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/content"
						}
					}
				},
				{
					"name": "Groups Onenote Notebooks Section Groups Sections Update Pages Content",
					"value": "Groups Onenote Notebooks Section Groups Sections Update Pages Content",
					"action": "Update content for the navigation property pages in groups",
					"description": "The page's HTML content.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/content"
						}
					}
				},
				{
					"name": "Groups Onenote Notebooks Section Groups Sections Pages Get Parent Notebook",
					"value": "Groups Onenote Notebooks Section Groups Sections Pages Get Parent Notebook",
					"action": "Get parentNotebook from groups",
					"description": "The notebook that contains the page.  Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/parentNotebook"
						}
					}
				},
				{
					"name": "Groups Onenote Notebooks Section Groups Sections Pages Get Parent Section",
					"value": "Groups Onenote Notebooks Section Groups Sections Pages Get Parent Section",
					"action": "Get parentSection from groups",
					"description": "The section that contains the page. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/parentSection"
						}
					}
				},
				{
					"name": "Groups Onenote Notebooks Section Groups Sections Get Parent Notebook",
					"value": "Groups Onenote Notebooks Section Groups Sections Get Parent Notebook",
					"action": "Get parentNotebook from groups",
					"description": "The notebook that contains the section.  Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/parentNotebook"
						}
					}
				},
				{
					"name": "Groups Onenote Notebooks Section Groups Sections Get Parent Section Group",
					"value": "Groups Onenote Notebooks Section Groups Sections Get Parent Section Group",
					"action": "Get parentSectionGroup from groups",
					"description": "The section group that contains the section.  Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/parentSectionGroup"
						}
					}
				},
				{
					"name": "Groups Onenote Notebooks List Sections",
					"value": "Groups Onenote Notebooks List Sections",
					"action": "List sections",
					"description": "Retrieve a list of section objects from the specified notebook.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections"
						}
					}
				},
				{
					"name": "Groups Onenote Notebooks Create Sections",
					"value": "Groups Onenote Notebooks Create Sections",
					"action": "Create section",
					"description": "Create a new section in the specified notebook.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections"
						}
					}
				},
				{
					"name": "Groups Onenote Notebooks Delete Sections",
					"value": "Groups Onenote Notebooks Delete Sections",
					"action": "Delete navigation property sections for groups",
					"description": "Delete navigation property sections for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Onenote Notebooks Get Sections",
					"value": "Groups Onenote Notebooks Get Sections",
					"action": "Get sections from groups",
					"description": "The sections in the notebook. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Onenote Notebooks Update Sections",
					"value": "Groups Onenote Notebooks Update Sections",
					"action": "Update the navigation property sections in groups",
					"description": "Update the navigation property sections in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Onenote Notebooks Sections List Pages",
					"value": "Groups Onenote Notebooks Sections List Pages",
					"action": "Get pages from groups",
					"description": "The collection of pages in the section.  Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages"
						}
					}
				},
				{
					"name": "Groups Onenote Notebooks Sections Create Pages",
					"value": "Groups Onenote Notebooks Sections Create Pages",
					"action": "Create new navigation property to pages for groups",
					"description": "Create new navigation property to pages for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages"
						}
					}
				},
				{
					"name": "Groups Onenote Notebooks Sections Delete Pages",
					"value": "Groups Onenote Notebooks Sections Delete Pages",
					"action": "Delete navigation property pages for groups",
					"description": "Delete navigation property pages for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Onenote Notebooks Sections Get Pages",
					"value": "Groups Onenote Notebooks Sections Get Pages",
					"action": "Get pages from groups",
					"description": "The collection of pages in the section.  Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Onenote Notebooks Sections Update Pages",
					"value": "Groups Onenote Notebooks Sections Update Pages",
					"action": "Update the navigation property pages in groups",
					"description": "Update the navigation property pages in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Onenote Notebooks Sections Get Pages Content",
					"value": "Groups Onenote Notebooks Sections Get Pages Content",
					"action": "Get content for the navigation property pages from groups",
					"description": "The page's HTML content.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/content"
						}
					}
				},
				{
					"name": "Groups Onenote Notebooks Sections Update Pages Content",
					"value": "Groups Onenote Notebooks Sections Update Pages Content",
					"action": "Update content for the navigation property pages in groups",
					"description": "The page's HTML content.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/content"
						}
					}
				},
				{
					"name": "Groups Onenote Notebooks Sections Pages Get Parent Notebook",
					"value": "Groups Onenote Notebooks Sections Pages Get Parent Notebook",
					"action": "Get parentNotebook from groups",
					"description": "The notebook that contains the page.  Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/parentNotebook"
						}
					}
				},
				{
					"name": "Groups Onenote Notebooks Sections Pages Get Parent Section",
					"value": "Groups Onenote Notebooks Sections Pages Get Parent Section",
					"action": "Get parentSection from groups",
					"description": "The section that contains the page. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/parentSection"
						}
					}
				},
				{
					"name": "Groups Onenote Notebooks Sections Get Parent Notebook",
					"value": "Groups Onenote Notebooks Sections Get Parent Notebook",
					"action": "Get parentNotebook from groups",
					"description": "The notebook that contains the section.  Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/parentNotebook"
						}
					}
				},
				{
					"name": "Groups Onenote Notebooks Sections Get Parent Section Group",
					"value": "Groups Onenote Notebooks Sections Get Parent Section Group",
					"action": "Get parentSectionGroup from groups",
					"description": "The section group that contains the section.  Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/parentSectionGroup"
						}
					}
				},
				{
					"name": "Groups Onenote List Operations",
					"value": "Groups Onenote List Operations",
					"action": "Get operations from groups",
					"description": "The status of OneNote operations. Getting an operations collection is not supported, but you can get the status of long-running operations if the Operation-Location header is returned in the response. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/operations"
						}
					}
				},
				{
					"name": "Groups Onenote Create Operations",
					"value": "Groups Onenote Create Operations",
					"action": "Create new navigation property to operations for groups",
					"description": "Create new navigation property to operations for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/operations"
						}
					}
				},
				{
					"name": "Groups Onenote Delete Operations",
					"value": "Groups Onenote Delete Operations",
					"action": "Delete navigation property operations for groups",
					"description": "Delete navigation property operations for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/operations/{{$parameter[\"onenoteOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Onenote Get Operations",
					"value": "Groups Onenote Get Operations",
					"action": "Get operations from groups",
					"description": "The status of OneNote operations. Getting an operations collection is not supported, but you can get the status of long-running operations if the Operation-Location header is returned in the response. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/operations/{{$parameter[\"onenoteOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Onenote Update Operations",
					"value": "Groups Onenote Update Operations",
					"action": "Update the navigation property operations in groups",
					"description": "Update the navigation property operations in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/operations/{{$parameter[\"onenoteOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Onenote List Pages",
					"value": "Groups Onenote List Pages",
					"action": "Get pages from groups",
					"description": "The pages in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/pages"
						}
					}
				},
				{
					"name": "Groups Onenote Create Pages",
					"value": "Groups Onenote Create Pages",
					"action": "Create new navigation property to pages for groups",
					"description": "Create new navigation property to pages for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/pages"
						}
					}
				},
				{
					"name": "Groups Onenote Delete Pages",
					"value": "Groups Onenote Delete Pages",
					"action": "Delete navigation property pages for groups",
					"description": "Delete navigation property pages for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Onenote Get Pages",
					"value": "Groups Onenote Get Pages",
					"action": "Get pages from groups",
					"description": "The pages in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Onenote Update Pages",
					"value": "Groups Onenote Update Pages",
					"action": "Update the navigation property pages in groups",
					"description": "Update the navigation property pages in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Onenote Get Pages Content",
					"value": "Groups Onenote Get Pages Content",
					"action": "Get content for the navigation property pages from groups",
					"description": "The page's HTML content.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/pages/{{$parameter[\"onenotePage-id\"]}}/content"
						}
					}
				},
				{
					"name": "Groups Onenote Update Pages Content",
					"value": "Groups Onenote Update Pages Content",
					"action": "Update content for the navigation property pages in groups",
					"description": "The page's HTML content.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/pages/{{$parameter[\"onenotePage-id\"]}}/content"
						}
					}
				},
				{
					"name": "Groups Onenote Pages Get Parent Notebook",
					"value": "Groups Onenote Pages Get Parent Notebook",
					"action": "Get parentNotebook from groups",
					"description": "The notebook that contains the page.  Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/pages/{{$parameter[\"onenotePage-id\"]}}/parentNotebook"
						}
					}
				},
				{
					"name": "Groups Onenote Pages Get Parent Section",
					"value": "Groups Onenote Pages Get Parent Section",
					"action": "Get parentSection from groups",
					"description": "The section that contains the page. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/pages/{{$parameter[\"onenotePage-id\"]}}/parentSection"
						}
					}
				},
				{
					"name": "Groups Onenote List Resources",
					"value": "Groups Onenote List Resources",
					"action": "Get resources from groups",
					"description": "The image and other file resources in OneNote pages. Getting a resources collection is not supported, but you can get the binary content of a specific resource. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/resources"
						}
					}
				},
				{
					"name": "Groups Onenote Create Resources",
					"value": "Groups Onenote Create Resources",
					"action": "Create new navigation property to resources for groups",
					"description": "Create new navigation property to resources for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/resources"
						}
					}
				},
				{
					"name": "Groups Onenote Delete Resources",
					"value": "Groups Onenote Delete Resources",
					"action": "Delete navigation property resources for groups",
					"description": "Delete navigation property resources for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/resources/{{$parameter[\"onenoteResource-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Onenote Get Resources",
					"value": "Groups Onenote Get Resources",
					"action": "Get resources from groups",
					"description": "The image and other file resources in OneNote pages. Getting a resources collection is not supported, but you can get the binary content of a specific resource. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/resources/{{$parameter[\"onenoteResource-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Onenote Update Resources",
					"value": "Groups Onenote Update Resources",
					"action": "Update the navigation property resources in groups",
					"description": "Update the navigation property resources in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/resources/{{$parameter[\"onenoteResource-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Onenote Get Resources Content",
					"value": "Groups Onenote Get Resources Content",
					"action": "Get content for the navigation property resources from groups",
					"description": "Get content for the navigation property resources from groups",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/resources/{{$parameter[\"onenoteResource-id\"]}}/content"
						}
					}
				},
				{
					"name": "Groups Onenote Update Resources Content",
					"value": "Groups Onenote Update Resources Content",
					"action": "Update content for the navigation property resources in groups",
					"description": "Update content for the navigation property resources in groups",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/resources/{{$parameter[\"onenoteResource-id\"]}}/content"
						}
					}
				},
				{
					"name": "Groups Onenote List Section Groups",
					"value": "Groups Onenote List Section Groups",
					"action": "List sectionGroups",
					"description": "Retrieve a list of sectionGroup objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/sectionGroups"
						}
					}
				},
				{
					"name": "Groups Onenote Create Section Groups",
					"value": "Groups Onenote Create Section Groups",
					"action": "Create new navigation property to sectionGroups for groups",
					"description": "Create new navigation property to sectionGroups for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/sectionGroups"
						}
					}
				},
				{
					"name": "Groups Onenote Delete Section Groups",
					"value": "Groups Onenote Delete Section Groups",
					"action": "Delete navigation property sectionGroups for groups",
					"description": "Delete navigation property sectionGroups for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Onenote Get Section Groups",
					"value": "Groups Onenote Get Section Groups",
					"action": "Get sectionGroups from groups",
					"description": "The section groups in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Onenote Update Section Groups",
					"value": "Groups Onenote Update Section Groups",
					"action": "Update the navigation property sectionGroups in groups",
					"description": "Update the navigation property sectionGroups in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Onenote Section Groups Get Parent Notebook",
					"value": "Groups Onenote Section Groups Get Parent Notebook",
					"action": "Get parentNotebook from groups",
					"description": "The notebook that contains the section group. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/parentNotebook"
						}
					}
				},
				{
					"name": "Groups Onenote Section Groups Get Parent Section Group",
					"value": "Groups Onenote Section Groups Get Parent Section Group",
					"action": "Get parentSectionGroup from groups",
					"description": "The section group that contains the section group. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/parentSectionGroup"
						}
					}
				},
				{
					"name": "Groups Onenote Section Groups List Section Groups",
					"value": "Groups Onenote Section Groups List Section Groups",
					"action": "List sectionGroups",
					"description": "Retrieve a list of section groups from the specified section group.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sectionGroups"
						}
					}
				},
				{
					"name": "Groups Onenote Section Groups Get Section Groups",
					"value": "Groups Onenote Section Groups Get Section Groups",
					"action": "Get sectionGroups from groups",
					"description": "The section groups in the section. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id1\"]}}"
						}
					}
				},
				{
					"name": "Groups Onenote Section Groups List Sections",
					"value": "Groups Onenote Section Groups List Sections",
					"action": "List sections",
					"description": "Retrieve a list of onenoteSection objects from the specified section group.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections"
						}
					}
				},
				{
					"name": "Groups Onenote Section Groups Create Sections",
					"value": "Groups Onenote Section Groups Create Sections",
					"action": "Create section",
					"description": "Create a new section in the specified section group.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections"
						}
					}
				},
				{
					"name": "Groups Onenote Section Groups Delete Sections",
					"value": "Groups Onenote Section Groups Delete Sections",
					"action": "Delete navigation property sections for groups",
					"description": "Delete navigation property sections for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Onenote Section Groups Get Sections",
					"value": "Groups Onenote Section Groups Get Sections",
					"action": "Get sections from groups",
					"description": "The sections in the section group. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Onenote Section Groups Update Sections",
					"value": "Groups Onenote Section Groups Update Sections",
					"action": "Update the navigation property sections in groups",
					"description": "Update the navigation property sections in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Onenote Section Groups Sections List Pages",
					"value": "Groups Onenote Section Groups Sections List Pages",
					"action": "Get pages from groups",
					"description": "The collection of pages in the section.  Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages"
						}
					}
				},
				{
					"name": "Groups Onenote Section Groups Sections Create Pages",
					"value": "Groups Onenote Section Groups Sections Create Pages",
					"action": "Create new navigation property to pages for groups",
					"description": "Create new navigation property to pages for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages"
						}
					}
				},
				{
					"name": "Groups Onenote Section Groups Sections Delete Pages",
					"value": "Groups Onenote Section Groups Sections Delete Pages",
					"action": "Delete navigation property pages for groups",
					"description": "Delete navigation property pages for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Onenote Section Groups Sections Get Pages",
					"value": "Groups Onenote Section Groups Sections Get Pages",
					"action": "Get pages from groups",
					"description": "The collection of pages in the section.  Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Onenote Section Groups Sections Update Pages",
					"value": "Groups Onenote Section Groups Sections Update Pages",
					"action": "Update the navigation property pages in groups",
					"description": "Update the navigation property pages in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Onenote Section Groups Sections Get Pages Content",
					"value": "Groups Onenote Section Groups Sections Get Pages Content",
					"action": "Get content for the navigation property pages from groups",
					"description": "The page's HTML content.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/content"
						}
					}
				},
				{
					"name": "Groups Onenote Section Groups Sections Update Pages Content",
					"value": "Groups Onenote Section Groups Sections Update Pages Content",
					"action": "Update content for the navigation property pages in groups",
					"description": "The page's HTML content.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/content"
						}
					}
				},
				{
					"name": "Groups Onenote Section Groups Sections Pages Get Parent Notebook",
					"value": "Groups Onenote Section Groups Sections Pages Get Parent Notebook",
					"action": "Get parentNotebook from groups",
					"description": "The notebook that contains the page.  Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/parentNotebook"
						}
					}
				},
				{
					"name": "Groups Onenote Section Groups Sections Pages Get Parent Section",
					"value": "Groups Onenote Section Groups Sections Pages Get Parent Section",
					"action": "Get parentSection from groups",
					"description": "The section that contains the page. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/parentSection"
						}
					}
				},
				{
					"name": "Groups Onenote Section Groups Sections Get Parent Notebook",
					"value": "Groups Onenote Section Groups Sections Get Parent Notebook",
					"action": "Get parentNotebook from groups",
					"description": "The notebook that contains the section.  Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/parentNotebook"
						}
					}
				},
				{
					"name": "Groups Onenote Section Groups Sections Get Parent Section Group",
					"value": "Groups Onenote Section Groups Sections Get Parent Section Group",
					"action": "Get parentSectionGroup from groups",
					"description": "The section group that contains the section.  Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/parentSectionGroup"
						}
					}
				},
				{
					"name": "Groups Onenote List Sections",
					"value": "Groups Onenote List Sections",
					"action": "List sections",
					"description": "Retrieve a list of section objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/sections"
						}
					}
				},
				{
					"name": "Groups Onenote Create Sections",
					"value": "Groups Onenote Create Sections",
					"action": "Create new navigation property to sections for groups",
					"description": "Create new navigation property to sections for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/sections"
						}
					}
				},
				{
					"name": "Groups Onenote Delete Sections",
					"value": "Groups Onenote Delete Sections",
					"action": "Delete navigation property sections for groups",
					"description": "Delete navigation property sections for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Onenote Get Sections",
					"value": "Groups Onenote Get Sections",
					"action": "Get sections from groups",
					"description": "The sections in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Onenote Update Sections",
					"value": "Groups Onenote Update Sections",
					"action": "Update the navigation property sections in groups",
					"description": "Update the navigation property sections in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Onenote Sections List Pages",
					"value": "Groups Onenote Sections List Pages",
					"action": "Get pages from groups",
					"description": "The collection of pages in the section.  Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}/pages"
						}
					}
				},
				{
					"name": "Groups Onenote Sections Create Pages",
					"value": "Groups Onenote Sections Create Pages",
					"action": "Create new navigation property to pages for groups",
					"description": "Create new navigation property to pages for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}/pages"
						}
					}
				},
				{
					"name": "Groups Onenote Sections Delete Pages",
					"value": "Groups Onenote Sections Delete Pages",
					"action": "Delete navigation property pages for groups",
					"description": "Delete navigation property pages for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Onenote Sections Get Pages",
					"value": "Groups Onenote Sections Get Pages",
					"action": "Get pages from groups",
					"description": "The collection of pages in the section.  Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Onenote Sections Update Pages",
					"value": "Groups Onenote Sections Update Pages",
					"action": "Update the navigation property pages in groups",
					"description": "Update the navigation property pages in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Onenote Sections Get Pages Content",
					"value": "Groups Onenote Sections Get Pages Content",
					"action": "Get content for the navigation property pages from groups",
					"description": "The page's HTML content.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/content"
						}
					}
				},
				{
					"name": "Groups Onenote Sections Update Pages Content",
					"value": "Groups Onenote Sections Update Pages Content",
					"action": "Update content for the navigation property pages in groups",
					"description": "The page's HTML content.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/content"
						}
					}
				},
				{
					"name": "Groups Onenote Sections Pages Get Parent Notebook",
					"value": "Groups Onenote Sections Pages Get Parent Notebook",
					"action": "Get parentNotebook from groups",
					"description": "The notebook that contains the page.  Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/parentNotebook"
						}
					}
				},
				{
					"name": "Groups Onenote Sections Pages Get Parent Section",
					"value": "Groups Onenote Sections Pages Get Parent Section",
					"action": "Get parentSection from groups",
					"description": "The section that contains the page. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/parentSection"
						}
					}
				},
				{
					"name": "Groups Onenote Sections Get Parent Notebook",
					"value": "Groups Onenote Sections Get Parent Notebook",
					"action": "Get parentNotebook from groups",
					"description": "The notebook that contains the section.  Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}/parentNotebook"
						}
					}
				},
				{
					"name": "Groups Onenote Sections Get Parent Section Group",
					"value": "Groups Onenote Sections Get Parent Section Group",
					"action": "Get parentSectionGroup from groups",
					"description": "The section group that contains the section.  Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}/parentSectionGroup"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /groups/{group-id}/onenote",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Delete Onenote"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Delete Onenote"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Get Onenote"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Get Onenote"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Get Onenote"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/onenote",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Update Onenote"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/onenote<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Update Onenote"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/notebooks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote List Notebooks"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote List Notebooks"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote List Notebooks"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote List Notebooks"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote List Notebooks"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote List Notebooks"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote List Notebooks"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote List Notebooks"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote List Notebooks"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/onenote/notebooks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Create Notebooks"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/onenote/notebooks<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Create Notebooks"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/onenote/notebooks/{notebook-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Delete Notebooks"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Delete Notebooks"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/notebooks/{notebook-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Get Notebooks"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Get Notebooks"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Get Notebooks"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/onenote/notebooks/{notebook-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Update Notebooks"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/onenote/notebooks/{notebook-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Update Notebooks"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks List Section Groups"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks List Section Groups"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks List Section Groups"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks List Section Groups"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks List Section Groups"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks List Section Groups"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks List Section Groups"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks List Section Groups"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks List Section Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Create Section Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Create Section Groups"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Delete Section Groups"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Delete Section Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Get Section Groups"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Get Section Groups"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Get Section Groups"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Update Section Groups"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Update Section Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/parentNotebook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups Get Parent Notebook"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups Get Parent Notebook"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/parentSectionGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups Get Parent Section Group"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups Get Parent Section Group"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups Get Parent Section Group"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sectionGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups List Section Groups"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups List Section Groups"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups List Section Groups"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups List Section Groups"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups List Section Groups"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups List Section Groups"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups List Section Groups"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups List Section Groups"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups List Section Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sectionGroups/{sectionGroup-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups Get Section Groups"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups Get Section Groups"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups Get Section Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups List Sections"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups List Sections"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups List Sections"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups List Sections"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups List Sections"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups List Sections"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups List Sections"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups List Sections"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups List Sections"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups Create Sections"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups Create Sections"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups Delete Sections"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups Delete Sections"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups Get Sections"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups Get Sections"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups Get Sections"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups Update Sections"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups Update Sections"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups Sections List Pages"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups Sections List Pages"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups Sections List Pages"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups Sections List Pages"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups Sections List Pages"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups Sections List Pages"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups Sections List Pages"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups Sections List Pages"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups Sections List Pages"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups Sections Create Pages"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups Sections Create Pages"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups Sections Delete Pages"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups Sections Delete Pages"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups Sections Get Pages"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups Sections Get Pages"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups Sections Get Pages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups Sections Update Pages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups Sections Update Pages"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups Sections Get Pages Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups Sections Update Pages Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups Sections Update Pages Content"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentNotebook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups Sections Pages Get Parent Notebook"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups Sections Pages Get Parent Notebook"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups Sections Pages Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentSection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups Sections Pages Get Parent Section"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups Sections Pages Get Parent Section"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups Sections Pages Get Parent Section"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentNotebook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups Sections Get Parent Notebook"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups Sections Get Parent Notebook"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups Sections Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentSectionGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups Sections Get Parent Section Group"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups Sections Get Parent Section Group"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Section Groups Sections Get Parent Section Group"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks List Sections"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks List Sections"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks List Sections"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks List Sections"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks List Sections"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks List Sections"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks List Sections"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks List Sections"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks List Sections"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/onenote/notebooks/{notebook-id}/sections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Create Sections"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/onenote/notebooks/{notebook-id}/sections<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Create Sections"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Delete Sections"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Delete Sections"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Get Sections"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Get Sections"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Get Sections"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Update Sections"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Update Sections"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Sections List Pages"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Sections List Pages"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Sections List Pages"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Sections List Pages"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Sections List Pages"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Sections List Pages"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Sections List Pages"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Sections List Pages"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Sections List Pages"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Sections Create Pages"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Sections Create Pages"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Sections Delete Pages"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Sections Delete Pages"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Sections Get Pages"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Sections Get Pages"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Sections Get Pages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Sections Update Pages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Sections Update Pages"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Sections Get Pages Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /groups/{group-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Sections Update Pages Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /groups/{group-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Sections Update Pages Content"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentNotebook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Sections Pages Get Parent Notebook"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Sections Pages Get Parent Notebook"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Sections Pages Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentSection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Sections Pages Get Parent Section"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Sections Pages Get Parent Section"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Sections Pages Get Parent Section"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/parentNotebook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Sections Get Parent Notebook"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Sections Get Parent Notebook"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Sections Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/parentSectionGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Sections Get Parent Section Group"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Sections Get Parent Section Group"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Notebooks Sections Get Parent Section Group"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/operations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote List Operations"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote List Operations"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote List Operations"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote List Operations"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote List Operations"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote List Operations"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote List Operations"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote List Operations"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote List Operations"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/onenote/operations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Create Operations"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/onenote/operations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Create Operations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/onenote/operations/{onenoteOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Delete Operations"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Delete Operations"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/operations/{onenoteOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Get Operations"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Get Operations"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Get Operations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/onenote/operations/{onenoteOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Update Operations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/onenote/operations/{onenoteOperation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Update Operations"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/pages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote List Pages"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote List Pages"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote List Pages"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote List Pages"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote List Pages"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote List Pages"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote List Pages"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote List Pages"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote List Pages"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/onenote/pages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Create Pages"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/onenote/pages<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Create Pages"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/onenote/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Delete Pages"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Delete Pages"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Get Pages"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Get Pages"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Get Pages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/onenote/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Update Pages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/onenote/pages/{onenotePage-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Update Pages"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/pages/{onenotePage-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Get Pages Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /groups/{group-id}/onenote/pages/{onenotePage-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Update Pages Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /groups/{group-id}/onenote/pages/{onenotePage-id}/content<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Update Pages Content"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/pages/{onenotePage-id}/parentNotebook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Pages Get Parent Notebook"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Pages Get Parent Notebook"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Pages Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/pages/{onenotePage-id}/parentSection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Pages Get Parent Section"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Pages Get Parent Section"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Pages Get Parent Section"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/resources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote List Resources"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote List Resources"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote List Resources"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote List Resources"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote List Resources"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote List Resources"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote List Resources"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote List Resources"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote List Resources"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/onenote/resources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Create Resources"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/onenote/resources<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Create Resources"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/onenote/resources/{onenoteResource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Delete Resources"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Delete Resources"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/resources/{onenoteResource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Get Resources"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Get Resources"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Get Resources"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/onenote/resources/{onenoteResource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Update Resources"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/onenote/resources/{onenoteResource-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Update Resources"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/resources/{onenoteResource-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Get Resources Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /groups/{group-id}/onenote/resources/{onenoteResource-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Update Resources Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /groups/{group-id}/onenote/resources/{onenoteResource-id}/content<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Update Resources Content"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/sectionGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote List Section Groups"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote List Section Groups"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote List Section Groups"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote List Section Groups"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote List Section Groups"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote List Section Groups"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote List Section Groups"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote List Section Groups"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote List Section Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/onenote/sectionGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Create Section Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/onenote/sectionGroups<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Create Section Groups"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Delete Section Groups"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Delete Section Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Get Section Groups"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Get Section Groups"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Get Section Groups"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Update Section Groups"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Update Section Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/parentNotebook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups Get Parent Notebook"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups Get Parent Notebook"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/parentSectionGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups Get Parent Section Group"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups Get Parent Section Group"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups Get Parent Section Group"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sectionGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups List Section Groups"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups List Section Groups"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups List Section Groups"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups List Section Groups"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups List Section Groups"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups List Section Groups"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups List Section Groups"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups List Section Groups"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups List Section Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sectionGroups/{sectionGroup-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups Get Section Groups"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups Get Section Groups"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups Get Section Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups List Sections"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups List Sections"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups List Sections"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups List Sections"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups List Sections"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups List Sections"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups List Sections"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups List Sections"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups List Sections"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups Create Sections"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups Create Sections"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups Delete Sections"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups Delete Sections"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups Get Sections"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups Get Sections"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups Get Sections"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups Update Sections"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups Update Sections"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups Sections List Pages"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups Sections List Pages"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups Sections List Pages"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups Sections List Pages"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups Sections List Pages"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups Sections List Pages"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups Sections List Pages"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups Sections List Pages"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups Sections List Pages"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups Sections Create Pages"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups Sections Create Pages"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups Sections Delete Pages"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups Sections Delete Pages"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups Sections Get Pages"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups Sections Get Pages"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups Sections Get Pages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups Sections Update Pages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups Sections Update Pages"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups Sections Get Pages Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups Sections Update Pages Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups Sections Update Pages Content"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentNotebook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups Sections Pages Get Parent Notebook"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups Sections Pages Get Parent Notebook"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups Sections Pages Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentSection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups Sections Pages Get Parent Section"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups Sections Pages Get Parent Section"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups Sections Pages Get Parent Section"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentNotebook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups Sections Get Parent Notebook"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups Sections Get Parent Notebook"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups Sections Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentSectionGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups Sections Get Parent Section Group"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups Sections Get Parent Section Group"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Section Groups Sections Get Parent Section Group"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/sections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote List Sections"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote List Sections"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote List Sections"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote List Sections"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote List Sections"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote List Sections"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote List Sections"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote List Sections"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote List Sections"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/onenote/sections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Create Sections"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/onenote/sections<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Create Sections"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/onenote/sections/{onenoteSection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Delete Sections"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Delete Sections"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/sections/{onenoteSection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Get Sections"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Get Sections"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Get Sections"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/onenote/sections/{onenoteSection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Update Sections"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/onenote/sections/{onenoteSection-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Update Sections"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/sections/{onenoteSection-id}/pages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Sections List Pages"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Sections List Pages"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Sections List Pages"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Sections List Pages"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Sections List Pages"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Sections List Pages"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Sections List Pages"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Sections List Pages"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Sections List Pages"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/onenote/sections/{onenoteSection-id}/pages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Sections Create Pages"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/onenote/sections/{onenoteSection-id}/pages<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Sections Create Pages"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Sections Delete Pages"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Sections Delete Pages"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Sections Get Pages"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Sections Get Pages"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Sections Get Pages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Sections Update Pages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Sections Update Pages"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Sections Get Pages Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /groups/{group-id}/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Sections Update Pages Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /groups/{group-id}/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}/content<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Sections Update Pages Content"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentNotebook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Sections Pages Get Parent Notebook"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Sections Pages Get Parent Notebook"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Sections Pages Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentSection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Sections Pages Get Parent Section"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Sections Pages Get Parent Section"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Sections Pages Get Parent Section"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/sections/{onenoteSection-id}/parentNotebook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Sections Get Parent Notebook"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Sections Get Parent Notebook"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Sections Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/onenote/sections/{onenoteSection-id}/parentSectionGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Sections Get Parent Section Group"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Sections Get Parent Section Group"
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
						"Groups Onenote"
					],
					"operation": [
						"Groups Onenote Sections Get Parent Section Group"
					]
				}
			}
		},
];
