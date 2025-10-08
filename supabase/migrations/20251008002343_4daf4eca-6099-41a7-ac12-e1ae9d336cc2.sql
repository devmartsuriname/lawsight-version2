-- Promote info@devmart.sr to admin
INSERT INTO public.user_roles (user_id, role) 
VALUES ('e0d73997-55b0-4bba-8b92-3699f21197a1', 'admin')
ON CONFLICT (user_id, role) DO NOTHING;